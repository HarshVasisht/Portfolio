const books = [
    {
        "id": "book_1",
        "title": "Readme",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/README.md",
        "type": "md"
    },
    {
        "id": "book_2",
        "title": "Agentic Ai Summit Berkeley 2025",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/Agentic AI Summit Berkeley 2025.md",
        "type": "md"
    },
    {
        "id": "book_3",
        "title": "Advanced Rag",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/Advanced RAG.md",
        "type": "md"
    },
    {
        "id": "book_4",
        "title": "Ai Agent",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/AI Agent.md",
        "type": "md"
    },
    {
        "id": "book_5",
        "title": "Ai Llm Practice",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/AI LLM Practice.md",
        "type": "md"
    },
    {
        "id": "book_6",
        "title": "Ai System",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/AI System.md",
        "type": "md"
    },
    {
        "id": "book_7",
        "title": "Crewai",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/CrewAI.md",
        "type": "md"
    },
    {
        "id": "book_8",
        "title": "Llm App",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/LLM App.md",
        "type": "md"
    },
    {
        "id": "book_9",
        "title": "Llm Cheatsheet",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/LLM Cheatsheet.md",
        "type": "md"
    },
    {
        "id": "book_10",
        "title": "Llm Project",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/LLM Project.md",
        "type": "md"
    },
    {
        "id": "book_11",
        "title": "Rag",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/RAG.md",
        "type": "md"
    },
    {
        "id": "book_12",
        "title": "An Introduction To High Frequency Financ",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/An Introduction to High-Frequency Financ.md",
        "type": "md"
    },
    {
        "id": "book_13",
        "title": "Notes On An Introduction To High Frequency Finance",
        "author": "Unknown",
        "file": "knowledge_hub/PDFs/Notes on An Introduction to High-Frequency Finance.pdf",
        "type": "pdf"
    },
    {
        "id": "book_14",
        "title": "Bdai 2024 Abstracts",
        "author": "Unknown",
        "file": "knowledge_hub/PDFs/BDAI-2024 Abstracts.pdf",
        "type": "pdf"
    },
    {
        "id": "book_15",
        "title": "Bdai 2024 Program",
        "author": "Unknown",
        "file": "knowledge_hub/PDFs/BDAI-2024 Program.pdf",
        "type": "pdf"
    },
    {
        "id": "book_16",
        "title": "Big_Data_Finance_Conference_High_Level_Overview",
        "author": "Unknown",
        "file": "knowledge_hub/PDFs/Big_Data_Finance_Conference_High_Level_Overview.pdf",
        "type": "pdf"
    },
    {
        "id": "book_17",
        "title": "Big_Data_Finance_Conference_Notes",
        "author": "Unknown",
        "file": "knowledge_hub/PDFs/Big_Data_Finance_Conference_Notes.pdf",
        "type": "pdf"
    },
    {
        "id": "book_18",
        "title": "C++ Design Patterns Derivatives Pricing",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/C++ Design Patterns Derivatives Pricing.md",
        "type": "md"
    },
    {
        "id": "book_19",
        "title": "C++ Design Patterns Derivatives Pricing",
        "author": "Unknown",
        "file": "knowledge_hub/PDFs/C++ Design Patterns Derivatives Pricing.pdf",
        "type": "pdf"
    },
    {
        "id": "book_20",
        "title": "Notes On Computer Systems   Chinese",
        "author": "Unknown",
        "file": "knowledge_hub/PDFs/Notes on Computer Systems - Chinese.pdf",
        "type": "pdf"
    },
    {
        "id": "book_21",
        "title": "Deepseek Developer Practice",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/DeepSeek Developer Practice.md",
        "type": "md"
    },
    {
        "id": "book_22",
        "title": "Deepseek Essentials",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/DeepSeek Essentials.md",
        "type": "md"
    },
    {
        "id": "book_23",
        "title": "Deepseek Handson",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/DeepSeek HandsOn.md",
        "type": "md"
    },
    {
        "id": "book_24",
        "title": "Deepseek Theory",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/DeepSeek Theory.md",
        "type": "md"
    },
    {
        "id": "book_25",
        "title": "Kimi K2",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/Kimi K2.md",
        "type": "md"
    },
    {
        "id": "book_26",
        "title": "30 Ml Ai",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/30 ML AI.md",
        "type": "md"
    },
    {
        "id": "book_27",
        "title": "Deepseek Large Model",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/DeepSeek Large Model.md",
        "type": "md"
    },
    {
        "id": "book_28",
        "title": "Dive Into Deepseek Llm",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/Dive into DeepSeek LLM.md",
        "type": "md"
    },
    {
        "id": "book_29",
        "title": "Efficient Training Pytorch",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/Efficient Training PyTorch.md",
        "type": "md"
    },
    {
        "id": "book_30",
        "title": "Generative Ai On Aws",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/Generative AI on AWS.md",
        "type": "md"
    },
    {
        "id": "book_31",
        "title": "Langchain Scalable Llm Apps",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/LangChain Scalable LLM Apps.md",
        "type": "md"
    },
    {
        "id": "book_32",
        "title": "Llm From Theory To Practice",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/LLM from Theory to Practice.md",
        "type": "md"
    },
    {
        "id": "book_33",
        "title": "Unveiling Large Model",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/Unveiling Large Model.md",
        "type": "md"
    },
    {
        "id": "book_34",
        "title": "\u6d59\u5927\u5927\u6a21\u578b\u8bfe\u7b14\u8bb0",
        "author": "Unknown",
        "file": "knowledge_hub/PDFs/\u6d59\u5927\u5927\u6a21\u578b\u8bfe\u7b14\u8bb0.pdf",
        "type": "pdf"
    },
    {
        "id": "book_35",
        "title": "Projects",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/Projects.md",
        "type": "md"
    },
    {
        "id": "book_36",
        "title": "Notes On Machine Learning For Algorithmic Trading",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/Notes on Machine Learning for Algorithmic Trading.md",
        "type": "md"
    },
    {
        "id": "book_37",
        "title": "Notes On Machine Learning For Algorithmic Trading",
        "author": "Unknown",
        "file": "knowledge_hub/PDFs/Notes on Machine Learning for Algorithmic Trading.pdf",
        "type": "pdf"
    },
    {
        "id": "book_38",
        "title": "Gtc 2024",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/GTC 2024.md",
        "type": "md"
    },
    {
        "id": "book_39",
        "title": "Gtc 2025",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/GTC 2025.md",
        "type": "md"
    },
    {
        "id": "book_40",
        "title": "Building Web Agents",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/Building Web Agents.md",
        "type": "md"
    },
    {
        "id": "book_41",
        "title": "Sglang Dynamo",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/SGLang Dynamo.md",
        "type": "md"
    },
    {
        "id": "book_42",
        "title": "Shunyu Yao Agentic Ai",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/Shunyu Yao Agentic AI.md",
        "type": "md"
    },
    {
        "id": "book_43",
        "title": "World Models",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/World Models.md",
        "type": "md"
    },
    {
        "id": "book_44",
        "title": "Cloud",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/Cloud.md",
        "type": "md"
    },
    {
        "id": "book_45",
        "title": "Cloud",
        "author": "Unknown",
        "file": "knowledge_hub/PDFs/Cloud.pdf",
        "type": "pdf"
    },
    {
        "id": "book_46",
        "title": "Fx Exotic Derivatives",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/FX Exotic Derivatives.md",
        "type": "md"
    },
    {
        "id": "book_47",
        "title": "Fx Exotic Derivatives",
        "author": "Unknown",
        "file": "knowledge_hub/PDFs/FX Exotic Derivatives.pdf",
        "type": "pdf"
    },
    {
        "id": "book_48",
        "title": "Quant Essentials Takeaways",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/Quant Essentials Takeaways.md",
        "type": "md"
    },
    {
        "id": "book_49",
        "title": "Quant",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/Quant.md",
        "type": "md"
    },
    {
        "id": "book_50",
        "title": "Quant",
        "author": "Unknown",
        "file": "knowledge_hub/PDFs/Quant.pdf",
        "type": "pdf"
    },
    {
        "id": "book_51",
        "title": "Risk Methodologies",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/Risk Methodologies.md",
        "type": "md"
    },
    {
        "id": "book_52",
        "title": "Risk Methodologies",
        "author": "Unknown",
        "file": "knowledge_hub/PDFs/Risk Methodologies.pdf",
        "type": "pdf"
    },
    {
        "id": "book_53",
        "title": "Stochastic Volatility Modeling   Char 1 Introduction Notes",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/Stochastic Volatility Modeling - Char 1 Introduction Notes.md",
        "type": "md"
    },
    {
        "id": "book_54",
        "title": "Stochastic Volatility Modeling   Char 1 Introduction Notes",
        "author": "Unknown",
        "file": "knowledge_hub/PDFs/Stochastic Volatility Modeling - Char 1 Introduction Notes.pdf",
        "type": "pdf"
    },
    {
        "id": "book_55",
        "title": "Stochastic Volatility Modeling   Char 2 Local Volatility Notes",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/Stochastic Volatility Modeling - Char 2 Local Volatility Notes.md",
        "type": "md"
    },
    {
        "id": "book_56",
        "title": "Stochastic Volatility Modeling   Char 2 Local Volatility Notes",
        "author": "Unknown",
        "file": "knowledge_hub/PDFs/Stochastic Volatility Modeling - Char 2 Local Volatility Notes.pdf",
        "type": "pdf"
    },
    {
        "id": "book_57",
        "title": "Genai System Design Interview",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/GenAI System Design Interview.md",
        "type": "md"
    },
    {
        "id": "book_58",
        "title": "Genai System Design",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/GenAI System Design.md",
        "type": "md"
    },
    {
        "id": "book_59",
        "title": "Ml System Design Interview",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/ML System Design Interview.md",
        "type": "md"
    },
    {
        "id": "book_60",
        "title": "Modern System Design",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/Modern System Design.md",
        "type": "md"
    },
    {
        "id": "book_61",
        "title": "Notes On System Design",
        "author": "Unknown",
        "file": "knowledge_hub/PDFs/Notes on System Design.pdf",
        "type": "pdf"
    },
    {
        "id": "book_62",
        "title": "Readme_1",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/README_1.md",
        "type": "md"
    },
    {
        "id": "book_63",
        "title": "Beyond Cracking The Coding Interview",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/Beyond Cracking the Coding Interview.md",
        "type": "md"
    },
    {
        "id": "book_64",
        "title": "Grokking The Coding Interview Patterns In Python",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/Grokking the Coding Interview Patterns in Python.md",
        "type": "md"
    },
    {
        "id": "book_65",
        "title": "Grokking The System Design Interview",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/Grokking the System Design Interview.md",
        "type": "md"
    },
    {
        "id": "book_66",
        "title": "Grokking The System Design Interview",
        "author": "Unknown",
        "file": "knowledge_hub/PDFs/Grokking the System Design Interview.pdf",
        "type": "pdf"
    },
    {
        "id": "book_67",
        "title": "Kaggle Course Notes",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/Kaggle Course Notes.md",
        "type": "md"
    },
    {
        "id": "book_68",
        "title": "Kaggle Course Notes",
        "author": "Unknown",
        "file": "knowledge_hub/PDFs/Kaggle Course Notes.pdf",
        "type": "pdf"
    },
    {
        "id": "book_69",
        "title": "Essential Linux",
        "author": "Unknown",
        "file": "knowledge_hub/PDFs/Essential Linux.pdf",
        "type": "pdf"
    },
    {
        "id": "book_70",
        "title": "Princeton Algorithm Coursera Notes Junfan Zhu",
        "author": "Unknown",
        "file": "knowledge_hub/PDFs/Princeton Algorithm Coursera Notes Junfan Zhu.pdf",
        "type": "pdf"
    },
    {
        "id": "book_71",
        "title": "Princeton Algorithm Coursera Notes",
        "author": "Unknown",
        "file": "knowledge_hub/Markdowns/Princeton Algorithm Coursera Notes.md",
        "type": "md"
    }
];
let currentBookId = null;

function getSavedData() {
    const data = localStorage.getItem('maverick_ereader_data');
    return data ? JSON.parse(data) : {};
}

function saveBookData(id, update) {
    const data = getSavedData();
    if (!data[id]) data[id] = { status: 'To Read', favorite: false, notes: '' };
    data[id] = { ...data[id], ...update };
    localStorage.setItem('maverick_ereader_data', JSON.stringify(data));
    renderBookList();
    renderToolbar();
}

function renderBookList(filterQuery = '') {
    const bookList = document.getElementById('bookList');
    if(!bookList) return;
    bookList.innerHTML = '';
    const savedData = getSavedData();
    
    // Sort books: Favorites first, then alphabetical
    let sortedBooks = [...books].sort((a, b) => {
        const aFav = savedData[a.id]?.favorite || false;
        const bFav = savedData[b.id]?.favorite || false;
        if (aFav !== bFav) return bFav ? -1 : 1;
        return a.title.localeCompare(b.title);
    });

    if (filterQuery) {
        sortedBooks = sortedBooks.filter(b => b.title.toLowerCase().includes(filterQuery.toLowerCase()));
    }

    sortedBooks.forEach((book) => {
        const data = savedData[book.id] || { status: 'To Read', favorite: false };
        const isActive = currentBookId === book.id;
        
        const a = document.createElement('a');
        a.href = "#";
        a.className = isActive 
            ? "block p-3 rounded-lg bg-sky-900/20 border border-sky-500/20 group mb-1" 
            : "block p-3 rounded-lg hover:bg-panelhover transition-colors group mb-1";
        
        const favIconColor = data.favorite ? "text-yellow-500/80" : "text-zinc-600 group-hover:text-zinc-400";
        const titleColor = isActive ? "text-sky-400" : "text-zinc-200 group-hover:text-white";
        const metaColor = isActive ? "text-sky-500/70" : "text-zinc-500";
        
        let statusDot = "bg-zinc-600";
        if (data.status === 'Reading') statusDot = "bg-sky-500";
        if (data.status === 'Read') statusDot = "bg-emerald-500";

        a.innerHTML = `
            <div class="flex items-start gap-2">
                <i class="ph-fill ph-star ${favIconColor} text-sm mt-0.5 shrink-0"></i>
                <div>
                    <h3 class="text-sm font-medium ${titleColor} truncate max-w-[180px]" title="${book.title}">${book.title}</h3>
                    <p class="text-xs ${metaColor} mt-1 flex items-center gap-1">
                        <span class="w-2 h-2 rounded-full ${statusDot}"></span> ${data.status} | ${book.type.toUpperCase()}
                    </p>
                </div>
            </div>
        `;
        
        a.addEventListener('click', (e) => {
            e.preventDefault();
            currentBookId = book.id;
            renderBookList(document.getElementById('searchInput')?.value || '');
            loadBook(book);
        });

        bookList.appendChild(a);
    });
}

function renderToolbar() {
    const toolbar = document.getElementById('readerToolbar');
    if (!toolbar) return;
    
    if (!currentBookId) {
        toolbar.style.display = 'none';
        return;
    }
    
    const data = getSavedData()[currentBookId] || { status: 'To Read', favorite: false, notes: '' };
    toolbar.style.display = 'flex';
    
    // Update Favorite Icon
    const favIcon = document.getElementById('favIcon');
    if (favIcon) {
        favIcon.className = data.favorite ? "ph-fill ph-star text-yellow-400" : "ph ph-star text-zinc-400";
    }

    // Update Status Select
    const statusSelect = document.getElementById('statusSelect');
    if (statusSelect) {
        statusSelect.value = data.status || 'To Read';
    }

    // Update Notes Area
    const notesArea = document.getElementById('notesArea');
    if (notesArea && notesArea.dataset.bookId !== currentBookId) {
        notesArea.value = data.notes || '';
        notesArea.dataset.bookId = currentBookId;
    }

    // Update Labels
    const book = books.find(b => b.id === currentBookId);
    if (book) {
        document.getElementById('currentDocLabel').innerText = book.title;
        document.getElementById('notesFileLabel').innerText = book.file.split('/').pop();
    }
}

window.toggleFavorite = function() {
    if(!currentBookId) return;
    const data = getSavedData()[currentBookId] || { favorite: false };
    saveBookData(currentBookId, { favorite: !data.favorite });
}

window.changeStatus = function(newStatus) {
    if(!currentBookId) return;
    saveBookData(currentBookId, { status: newStatus });
}

window.openWikiLink = function(title) {
    const targetTitle = title.toLowerCase().trim();
    const book = books.find(b => b.title.toLowerCase() === targetTitle);
    if (book) {
        currentBookId = book.id;
        renderBookList(document.getElementById('searchInput')?.value || '');
        loadBook(book);
    } else {
        alert("Link not found: " + title);
    }
}

window.revealFlashcard = function(el) {
    el.classList.add('revealed');
}

window.reviewFlashcard = function(btn, status) {
    const card = btn.closest('.flashcard');
    const id = card.dataset.id;
    const statusEl = card.querySelector('.flashcard-status');
    
    statusEl.innerText = status;
    statusEl.style.background = status === 'Got It' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(244, 63, 94, 0.2)';
    statusEl.style.color = status === 'Got It' ? '#34d399' : '#fb7185';
    
    // Save to localStorage
    const savedData = getSavedData();
    if (!savedData.flashcards) savedData.flashcards = {};
    savedData.flashcards[id] = status;
    localStorage.setItem('maverick_ereader_data', JSON.stringify(savedData));
}

document.addEventListener('DOMContentLoaded', () => {
    renderBookList();
    
    // Search filter
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            renderBookList(e.target.value);
        });
    }

    // Auto-save notes
    const notesArea = document.getElementById('notesArea');
    if (notesArea) {
        notesArea.addEventListener('input', (e) => {
            if (currentBookId) {
                saveBookData(currentBookId, { notes: e.target.value });
            }
        });
    }

    // Copy notes button
    const copyNotesBtn = document.getElementById('copyNotesBtn');
    if (copyNotesBtn) {
        copyNotesBtn.addEventListener('click', () => {
            if (notesArea) {
                navigator.clipboard.writeText(notesArea.value);
                const originalText = copyNotesBtn.innerText;
                copyNotesBtn.innerText = "Copied!";
                setTimeout(() => copyNotesBtn.innerText = originalText, 2000);
            }
        });
    }

    // Zen Mode Toggle
    const toggleZen = document.getElementById('toggle-zen');
    const toggleSidebar = document.getElementById('toggle-sidebar');
    const toggleNotesBtn = document.getElementById('toggle-notes');
    const sidebar = document.getElementById('sidebar');
    const notesPane = document.getElementById('notes-pane');

    let isZenMode = false;
    let isNotesVisible = true;

    if (toggleZen) {
        toggleZen.addEventListener('click', () => {
            isZenMode = !isZenMode;
            if (isZenMode) {
                if(sidebar.style.width !== '0px') toggleSidebar.click();
                notesPane.style.display = 'none';
                toggleZen.classList.add('text-sky-400');
            } else {
                if(sidebar.style.width === '0px') toggleSidebar.click();
                notesPane.style.display = isNotesVisible ? 'flex' : 'none';
                toggleZen.classList.remove('text-sky-400');
            }
        });
    }

    if (toggleNotesBtn) {
        toggleNotesBtn.addEventListener('click', () => {
            isNotesVisible = !isNotesVisible;
            notesPane.style.display = isNotesVisible ? 'flex' : 'none';
            if (isNotesVisible) {
                toggleNotesBtn.classList.add('text-zinc-100');
                toggleNotesBtn.classList.remove('text-zinc-400');
            } else {
                toggleNotesBtn.classList.remove('text-zinc-100');
                toggleNotesBtn.classList.add('text-zinc-400');
            }
        });
    }

    // Notes Preview Toggle
    const toggleNotesModeBtn = document.getElementById('toggleNotesModeBtn');
    const notesPreview = document.getElementById('notesPreview');
    let isPreviewMode = false;

    if (toggleNotesModeBtn) {
        toggleNotesModeBtn.addEventListener('click', () => {
            isPreviewMode = !isPreviewMode;
            if (isPreviewMode) {
                toggleNotesModeBtn.innerText = "Edit";
                notesArea.classList.add('hidden');
                notesPreview.classList.remove('hidden');
                
                let html = marked.parse(notesArea.value);
                
                // Parse Flashcards
                html = html.replace(/:::flashcard\s+([^|]+?)\s*\|\s*(.+?)\s*:::/g, (match, q, a) => {
                    const cid = btoa(q).substring(0,10);
                    return `<div class="flashcard" data-id="${currentBookId}-${cid}">
                        <div class="flashcard-status">New</div>
                        <div class="flashcard-q">${q}</div>
                        <div class="flashcard-a" onclick="revealFlashcard(this)">${a}</div>
                        <div class="flashcard-actions">
                            <button onclick="reviewFlashcard(this, 'Got It')" class="px-3 py-1 bg-emerald-600/30 text-emerald-400 hover:bg-emerald-600/50 rounded text-xs transition-colors">Got It</button>
                            <button onclick="reviewFlashcard(this, 'Need Review')" class="px-3 py-1 bg-rose-600/30 text-rose-400 hover:bg-rose-600/50 rounded text-xs transition-colors">Need Review</button>
                        </div>
                    </div>`;
                });
                
                notesPreview.innerHTML = `<div class="p-4">${html}</div>`;
                
                // Wiki-links
                notesPreview.querySelectorAll('p, li').forEach(el => {
                    el.innerHTML = el.innerHTML.replace(/\[\[(.*?)\]\]/g, `<span class="wiki-link" onclick="openWikiLink('$1')">$1</span>`);
                });
                
                // Restore flashcard status
                const savedData = getSavedData();
                const flashcardStatuses = savedData.flashcards || {};
                notesPreview.querySelectorAll('.flashcard').forEach(card => {
                    const id = card.dataset.id;
                    if (flashcardStatuses[id]) {
                        const status = flashcardStatuses[id];
                        const statusEl = card.querySelector('.flashcard-status');
                        statusEl.innerText = status;
                        statusEl.style.background = status === 'Got It' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(244, 63, 94, 0.2)';
                        statusEl.style.color = status === 'Got It' ? '#34d399' : '#fb7185';
                    }
                });

            } else {
                toggleNotesModeBtn.innerText = "Preview";
                notesArea.classList.remove('hidden');
                notesPreview.classList.add('hidden');
            }
        });
    }

    // Scroll Progress
    const sourcePane = document.getElementById('source-pane');
    if (sourcePane) {
        sourcePane.addEventListener('scroll', () => {
            const scrollTop = sourcePane.scrollTop;
            const scrollHeight = sourcePane.scrollHeight - sourcePane.clientHeight;
            const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
            const scrollBar = document.getElementById('scrollProgress');
            if(scrollBar) scrollBar.style.width = progress + '%';
        });
    }

    // Graph rendering
    const graphModal = document.getElementById('graphModal');
    const toggleGraph = document.getElementById('toggle-graph');
    const closeGraphBtn = document.getElementById('closeGraphBtn');
    let graphRendered = false;

    if (toggleGraph) {
        toggleGraph.addEventListener('click', () => {
            graphModal.style.display = 'flex';
            if (!graphRendered && typeof ForceGraph !== 'undefined' && typeof graphData !== 'undefined') {
                const Graph = ForceGraph()
                (document.getElementById('graphContainer'))
                    .graphData(graphData)
                    .nodeId('id')
                    .nodeLabel('name')
                    .nodeColor(node => currentBookId === node.id ? '#38bdf8' : '#6366f1')
                    .linkColor(() => '#3f3f46')
                    .backgroundColor('#09090b')
                    .onNodeClick(node => {
                        const book = books.find(b => b.id === node.id);
                        if (book) {
                            graphModal.style.display = 'none';
                            currentBookId = book.id;
                            renderBookList();
                            loadBook(book);
                        }
                    });
                graphRendered = true;
            }
        });
    }

    if (closeGraphBtn) {
        closeGraphBtn.addEventListener('click', () => {
            graphModal.style.display = 'none';
        });
    }

    if (books.length > 0) {
        // Load first book
        currentBookId = books[0].id;
        renderBookList();
        loadBook(books[0]);
    }
});

async function loadBook(book) {
    const readerContent = document.getElementById('readerContent');
    renderToolbar();
    
    // Reset reading time and scroll progress
    const readingTimeLabel = document.getElementById('readingTimeLabel');
    if(readingTimeLabel) readingTimeLabel.innerText = '';
    const scrollBar = document.getElementById('scrollProgress');
    if(scrollBar) scrollBar.style.width = '0%';

    if (book.type === 'pdf') {
        readerContent.innerHTML = `<iframe src="${book.file}" width="100%" height="100%" style="border: none; background: #fff; min-height: 80vh;"></iframe>`;
        return;
    }

    readerContent.innerHTML = '<div class="flex items-center justify-center h-full text-zinc-600 font-mono animate-pulse">DOWNLOADING DATA...</div>';
    
    try {
        const response = await fetch(book.file);
        if (!response.ok) throw new Error('File not found');
        
        const markdown = await response.text();
        
        // Reading Time Calculation
        const wordCount = markdown.split(/\s+/).length;
        const readTime = Math.max(1, Math.ceil(wordCount / 200));
        if(readingTimeLabel) readingTimeLabel.innerText = `${readTime} min read`;

        let html = marked.parse(markdown);
        
        // Parse Flashcards
        html = html.replace(/:::flashcard\s+([^|]+?)\s*\|\s*(.+?)\s*:::/g, (match, q, a) => {
            const cid = btoa(q).substring(0,10);
            return `<div class="flashcard" data-id="${book.id}-${cid}">
                <div class="flashcard-status">New</div>
                <div class="flashcard-q">${q}</div>
                <div class="flashcard-a" onclick="revealFlashcard(this)">${a}</div>
                <div class="flashcard-actions">
                    <button onclick="reviewFlashcard(this, 'Got It')" class="px-3 py-1 bg-emerald-600/30 text-emerald-400 hover:bg-emerald-600/50 rounded text-xs transition-colors">Got It</button>
                    <button onclick="reviewFlashcard(this, 'Need Review')" class="px-3 py-1 bg-rose-600/30 text-rose-400 hover:bg-rose-600/50 rounded text-xs transition-colors">Need Review</button>
                </div>
            </div>`;
        });

        readerContent.innerHTML = html;
        document.getElementById('source-pane').scrollTop = 0;
        
        // Add wiki-link functionality
        readerContent.querySelectorAll('p, li').forEach(el => {
            el.innerHTML = el.innerHTML.replace(/\[\[(.*?)\]\]/g, `<span class="wiki-link" onclick="openWikiLink('$1')">$1</span>`);
        });
        
        // Restore flashcard status
        const savedData = getSavedData();
        const flashcardStatuses = savedData.flashcards || {};
        readerContent.querySelectorAll('.flashcard').forEach(card => {
            const id = card.dataset.id;
            if (flashcardStatuses[id]) {
                const status = flashcardStatuses[id];
                const statusEl = card.querySelector('.flashcard-status');
                statusEl.innerText = status;
                statusEl.style.background = status === 'Got It' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(244, 63, 94, 0.2)';
                statusEl.style.color = status === 'Got It' ? '#34d399' : '#fb7185';
            }
        });

    } catch (err) {
        readerContent.innerHTML = `<div class="flex items-center justify-center h-full text-red-500 font-mono text-center">ERROR: UPLINK FAILED.<br>${err.message}</div>`;
    }
}
