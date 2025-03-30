document.addEventListener('DOMContentLoaded', function() {
    // Configure marked.js to use highlight.js for code highlighting
    marked.setOptions({
        highlight: function(code, lang) {
            if (lang && hljs.getLanguage(lang)) {
                return hljs.highlight(lang, code).value;
            }
            return hljs.highlightAuto(code).value;
        },
        breaks: true,
        gfm: true
    });

    // Unsplash API configuration
    const unsplashAccessKey = '8hutOADHZRPHPZyrcPCEuiERdB452MI071q2A-OgmkU';
    const unsplashApiUrl = 'https://api.unsplash.com';
    
    // Cache for Unsplash images to avoid redundant API calls
    const imageCache = {};

    // Get the blog list and post containers
    const blogList = document.getElementById('blog-list');
    const blogPostSection = document.getElementById('blog-post');
    const blogPostContent = document.getElementById('blog-post-content');
    const backToListButton = document.getElementById('back-to-list');
    const searchInput = document.getElementById('blog-search');
    const searchButton = document.getElementById('search-button');
    const categoryLinks = document.querySelectorAll('#blog-categories a');
    const relatedPosts = document.getElementById('related-posts');
    
    // Store all posts for filtering
    let allPosts = [];
    let currentCategory = 'all';
    let searchQuery = '';

    // Function to fetch the blog index
    async function fetchBlogIndex() {
        try {
            const response = await fetch('blog/index.json');
            if (!response.ok) {
                throw new Error('Failed to load blog index');
            }
            return await response.json();
        } catch (error) {
            console.error('Error loading blog index:', error);
            blogList.innerHTML = `<div class="error-message">Failed to load blog posts. Please try again later.</div>`;
            return [];
        }
    }

    // Function to fetch image from Unsplash API
    async function fetchUnsplashImage(keyword) {
        // Check cache first
        if (imageCache[keyword]) {
            return imageCache[keyword];
        }
        
        try {
            const response = await fetch(`${unsplashApiUrl}/photos/random?query=${encodeURIComponent(keyword)}&orientation=landscape&client_id=${unsplashAccessKey}`);
            
            if (!response.ok) {
                console.error('Error fetching from Unsplash API:', response.status);
                // Fallback to the old method if API fails
                return `https://source.unsplash.com/random/800x450/?${keyword}`;
            }
            
            const data = await response.json();
            const imageUrl = data.urls.regular;
            
            // Cache the result
            imageCache[keyword] = imageUrl;
            
            return imageUrl;
        } catch (error) {
            console.error('Error with Unsplash API:', error);
            // Fallback to the old method if API fails
            return `https://source.unsplash.com/random/800x450/?${keyword}`;
        }
    }

    // Function to categorize posts by date
    function categorizePosts(posts) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        
        const lastWeekStart = new Date(today);
        lastWeekStart.setDate(lastWeekStart.getDate() - 7);
        
        const todayPosts = [];
        const yesterdayPosts = [];
        const lastWeekPosts = [];
        const earlierPosts = [];
        
        posts.forEach(post => {
            const postDate = new Date(post.date);
            postDate.setHours(0, 0, 0, 0);
            
            if (postDate.getTime() === today.getTime()) {
                todayPosts.push(post);
            } else if (postDate.getTime() === yesterday.getTime()) {
                yesterdayPosts.push(post);
            } else if (postDate >= lastWeekStart && postDate < yesterday) {
                lastWeekPosts.push(post);
            } else {
                earlierPosts.push(post);
            }
        });
        
        return {
            today: todayPosts,
            yesterday: yesterdayPosts,
            lastWeek: lastWeekPosts,
            earlier: earlierPosts
        };
    }
    
    // Modify the renderBlogList function to use date segregation
    async function renderBlogList() {
        if (allPosts.length === 0) {
            allPosts = await fetchBlogIndex();
        }
        
        if (allPosts.length === 0) {
            blogList.innerHTML = `<div class="message">No blog posts found.</div>`;
            return;
        }
    
        // Filter posts by category and search query
        let filteredPosts = allPosts;
        
        if (currentCategory !== 'all') {
            filteredPosts = filteredPosts.filter(post => 
                post.tags && post.tags.some(tag => 
                    tag.toLowerCase() === currentCategory.toLowerCase()
                )
            );
        }
        
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            filteredPosts = filteredPosts.filter(post => 
                post.title.toLowerCase().includes(query) || 
                post.excerpt.toLowerCase().includes(query) ||
                (post.tags && post.tags.some(tag => tag.toLowerCase().includes(query)))
            );
        }
    
        // Sort posts by date (newest first)
        filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    
        if (filteredPosts.length === 0) {
            blogList.innerHTML = `<div class="message">No posts match your criteria. Try a different search or category.</div>`;
            return;
        }
    
        // Categorize posts by date
        const categorizedPosts = categorizePosts(filteredPosts);
        
        // Clear existing posts
        document.querySelector('#today-posts .date-posts').innerHTML = '';
        document.querySelector('#yesterday-posts .date-posts').innerHTML = '';
        document.querySelector('#lastweek-posts .date-posts').innerHTML = '';
        document.querySelector('#earlier-posts .date-posts').innerHTML = '';
        
        // Show date sections by default
        document.getElementById('today-posts').style.display = 'block';
        document.getElementById('yesterday-posts').style.display = 'block';
        document.getElementById('lastweek-posts').style.display = 'block';
        document.getElementById('earlier-posts').style.display = 'block';
        
        // Hide the original blog list
        blogList.style.display = 'none';
        
        // Render posts by date category
        await renderPostsForDateSection(categorizedPosts.today, 'today-posts');
        await renderPostsForDateSection(categorizedPosts.yesterday, 'yesterday-posts');
        await renderPostsForDateSection(categorizedPosts.lastWeek, 'lastweek-posts');
        await renderPostsForDateSection(categorizedPosts.earlier, 'earlier-posts');
    }
    
    // Add this new function to render posts for each date section
    async function renderPostsForDateSection(posts, sectionId) {
        if (!posts || posts.length === 0) return;
        
        const sectionElement = document.getElementById(sectionId);
        const postsContainer = sectionElement.querySelector('.date-posts');
        
        let html = '';
        
        // Process all posts with Promise.all to fetch images in parallel
        await Promise.all(posts.map(async (post) => {
            const date = new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
    
            // Use Unsplash for free images related to post content
            let imageKeyword = '';
            
            // Map post tags to relevant image keywords for better visual representation
            if (post.tags && post.tags.length > 0) {
                // Create a mapping of tags to relevant image keywords
                const tagToKeywordMap = {
                    'AI': 'artificial intelligence',
                    'Machine Learning': 'machine learning algorithm',
                    'Deep Learning': 'neural network visualization',
                    'NLP': 'natural language processing',
                    'Computer Vision': 'computer vision technology',
                    'Robotics': 'advanced robotics',
                    'Data Science': 'data visualization',
                    'Beginners': 'learning technology',
                    'Tutorial': 'coding tutorial',
                    'Research': 'research laboratory',
                    'Ethics': 'technology ethics',
                    'Future': 'futuristic technology',
                    'LLM': 'large language model',
                    'Fine-tuning': 'ai training',
                    'GPT': 'chatbot technology'
                };
                
                // Find the first tag that has a mapping
                for (const tag of post.tags) {
                    if (tagToKeywordMap[tag]) {
                        imageKeyword = tagToKeywordMap[tag];
                        break;
                    }
                }
                
                // If no mapping found, use the first tag as keyword
                if (!imageKeyword) {
                    imageKeyword = post.tags[0].toLowerCase().replace(/\s+/g, '-');
                }
            } else {
                // Fallback to general AI-related keywords
                const aiKeywords = ['artificial intelligence', 'machine learning', 'neural network', 'deep learning', 'ai technology'];
                imageKeyword = aiKeywords[Math.floor(Math.random() * aiKeywords.length)];
            }
            
            // Fetch image from Unsplash API
            const imagePath = await fetchUnsplashImage(imageKeyword);
    
            const postHtml = `
                <div class="blog-item">
                    <div class="blog-item__header">
                        <img src="${post.image || imagePath}" alt="${post.title}" class="blog-item__image">
                        <h2 class="blog-item__title">
                            <a href="#" data-post="${post.file}" class="blog-link">${post.title}</a>
                        </h2>
                        <p class="blog-item__date">${date}</p>
                    </div>
                    <div class="blog-item__excerpt">
                        <p>${post.excerpt}</p>
                    </div>
                    <div class="blog-item__tags">
                        ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <a href="#" data-post="${post.file}" class="btn btn--small blog-link">Read More</a>
                </div>
            `;
            
            // Append to html
            html += postHtml;
        }));
    
        postsContainer.innerHTML = html;
        sectionElement.style.display = 'block';
        
        // Add event listeners to blog post links
        postsContainer.querySelectorAll('.blog-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const postFile = this.getAttribute('data-post');
                loadBlogPost(postFile);
            });
        });
    }

    // Function to load and display a blog post
    async function loadBlogPost(postFile) {
        try {
            const response = await fetch(`blog/${postFile}`);
            if (!response.ok) {
                throw new Error('Failed to load blog post');
            }
            
            const markdown = await response.text();
            const html = marked.parse(markdown);
            
            // Extract title from the first h1 tag
            const titleMatch = html.match(/<h1[^>]*>(.*?)<\/h1>/);
            const title = titleMatch ? titleMatch[1] : 'Blog Post';
            
            // Update page title
            document.title = `${title} - Harsh Vasisht's Blog`;
            
            // Display the post content
            blogPostContent.innerHTML = html;
            
            // Hide blog list and show post
            const blogSection = document.querySelector('.s-blog');
            if (blogSection) blogSection.style.display = 'none';
            if (blogPostSection) blogPostSection.style.display = 'block';
            
            // Scroll to top
            window.scrollTo(0, 0);
            
            // Initialize syntax highlighting for code blocks
            document.querySelectorAll('pre code').forEach((block) => {
                // Use the newer highlight() method instead of deprecated highlightBlock()
                hljs.highlightElement(block);
            });
    
            // Load related posts
            loadRelatedPosts(postFile);
        } catch (error) {
            console.error('Error loading blog post:', error);
            if (blogPostContent) {
                blogPostContent.innerHTML = `<div class="error-message">Failed to load blog post. Please try again later.</div>`;
            }
        }
    }

    // Function to load related posts
    function loadRelatedPosts(currentPostFile) {
        if (!relatedPosts) return;
        
        // Find the current post
        const currentPost = allPosts.find(post => post.file === currentPostFile);
        if (!currentPost || !currentPost.tags) return;
        
        // Find posts with similar tags
        const relatedPostsList = allPosts
            .filter(post => 
                post.file !== currentPostFile && 
                post.tags && currentPost.tags && 
                post.tags.some(tag => currentPost.tags.includes(tag))
            )
            .sort((a, b) => {
                // Count matching tags
                const aMatches = a.tags.filter(tag => currentPost.tags.includes(tag)).length;
                const bMatches = b.tags.filter(tag => currentPost.tags.includes(tag)).length;
                return bMatches - aMatches;
            })
            .slice(0, 3); // Get top 3 related posts
        
        if (relatedPostsList.length === 0) {
            relatedPosts.innerHTML = '<p>No related posts found.</p>';
            return;
        }
        
        let html = '';
        relatedPostsList.forEach(post => {
            html += `
                <div class="related-post">
                    <h4><a href="#" data-post="${post.file}" class="blog-link">${post.title}</a></h4>
                    <p>${post.excerpt.substring(0, 100)}...</p>
                </div>
            `;
        });
        
        relatedPosts.innerHTML = html;
        
        // Add event listeners to related post links
        relatedPosts.querySelectorAll('.blog-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const postFile = this.getAttribute('data-post');
                loadBlogPost(postFile);
            });
        });
    }

    // Back to list button handler
    if (backToListButton) {
        backToListButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Reset page title
            document.title = 'Harsh Vasisht - Blog';
            
            // Show blog list and hide post
            document.querySelector('.s-blog').style.display = 'block';
            blogPostSection.style.display = 'none';
        });
    }

    // Search functionality
    if (searchInput && searchButton) {
        searchButton.addEventListener('click', function() {
            searchQuery = searchInput.value.trim();
            renderBlogList();
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchQuery = searchInput.value.trim();
                renderBlogList();
            }
        });
    }

    // Category filtering
    if (categoryLinks) {
        categoryLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Update active class
                categoryLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                
                // Update current category
                currentCategory = this.getAttribute('data-category');
                
                // Render filtered list
                renderBlogList();
            });
        });
    }

    // Add event listeners to date section headings
    const dateHeadings = document.querySelectorAll('.date-heading');
    if (dateHeadings) {
        dateHeadings.forEach(heading => {
            heading.addEventListener('click', function() {
                // Remove active class from all headings
                dateHeadings.forEach(h => h.classList.remove('active'));
                
                // Add active class to clicked heading
                this.classList.add('active');
                
                // Get the section id from the data attribute
                const sectionId = this.getAttribute('data-section');
                
                // Hide all date sections
                document.querySelectorAll('.date-section').forEach(section => {
                    section.style.display = 'none';
                });
                
                // Show only the clicked section
                document.getElementById(sectionId).style.display = 'block';
            });
        });
        
        // Set the first date heading as active by default
        if (dateHeadings.length > 0) {
            dateHeadings[0].classList.add('active');
            
            // Show the first section by default
            const firstSectionId = dateHeadings[0].getAttribute('data-section');
            document.querySelectorAll('.date-section').forEach(section => {
                section.style.display = section.id === firstSectionId ? 'block' : 'none';
            });
        }
    }
    
    // Initialize the blog
    renderBlogList();

    // Update featured post image using Unsplash API
    async function updateFeaturedPostImage() {
        const featuredPostImage = document.getElementById('featured-post-image');
        const featuredPostLink = document.getElementById('featured-post-link');
        
        if (featuredPostImage) {
            try {
                // Fetch a curated featured image for AI
                const featuredImageUrl = await fetchUnsplashImage('futuristic artificial intelligence');
                featuredPostImage.src = featuredImageUrl;
                
                // If we have posts, link to the first/newest one
                if (allPosts.length > 0) {
                    const latestPost = allPosts[0]; // Assuming posts are sorted newest first
                    featuredPostLink.setAttribute('data-post', latestPost.file);
                    
                    // Add click event to featured post link
                    featuredPostLink.addEventListener('click', function(e) {
                        e.preventDefault();
                        const postFile = this.getAttribute('data-post');
                        loadBlogPost(postFile);
                    });
                }
            } catch (error) {
                console.error('Error updating featured post image:', error);
            }
        }
    }

    // Call the function to update featured post image
    updateFeaturedPostImage();

    // Add animation to the featured post
    const featuredPost = document.querySelector('.featured-post');
    if (featuredPost) {
        featuredPost.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
        });
        
        featuredPost.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    }

    // Create directory structure for blog images
    function createImageDirectories() {
        // This would typically be done server-side
        console.log('Blog image directories should be created at: /Users/harshvashisht/Desktop/Project-7734/Portfolio/images/blog/');
    }

    // Initialize the ticker animation
    function initTicker() {
        const tickerItems = document.querySelector('.ticker-items');
        if (tickerItems) {
            // Clone the ticker items to create a continuous loop
            tickerItems.innerHTML += tickerItems.innerHTML;
        }
    }

    // Initialize the ticker
    initTicker();
});