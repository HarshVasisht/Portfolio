

(function(html) {

    "use strict";
    
    html.className = html.className.replace(/\bno-js\b/g, '') + ' js ';



    const ssPreloader = function() {

        const preloader = document.querySelector('#preloader');
        if (!preloader) return;

        window.addEventListener('load', function() {
            
            document.querySelector('body').classList.remove('ss-preload');
            document.querySelector('body').classList.add('ss-loaded');

            preloader.addEventListener('transitionend', function(e) {
                if (e.target.matches("#preloader")) {
                    this.style.display = 'none';
                }
            });

        });

       

    }; 



    const ssParallax = function() { 

        const rellax = new Rellax('.rellax');

    }; 



    const ssMoveHeader = function () {

        const hdr = document.querySelector('.s-header');
        const hero = document.querySelector('#hero');
        let triggerHeight;

        if (!(hdr && hero)) return;

        setTimeout(function(){
            triggerHeight = hero.offsetHeight - 170;
        }, 300);

        window.addEventListener('scroll', function () {

            let loc = window.scrollY;
           

            if (loc > triggerHeight) {
                hdr.classList.add('sticky');
            } else {
                hdr.classList.remove('sticky');
            }

            if (loc > triggerHeight + 20) {
                hdr.classList.add('offset');
            } else {
                hdr.classList.remove('offset');
            }

            if (loc > triggerHeight + 150) {
                hdr.classList.add('scrolling');
            } else {
                hdr.classList.remove('scrolling');
            }

        });

    }; 



    const ssMobileMenu = function() {

        const toggleButton = document.querySelector('.s-header__menu-toggle');
        const headerNavWrap = document.querySelector('.s-header__nav-wrap');
        const siteBody = document.querySelector("body");

        if (!(toggleButton && headerNavWrap)) return;

        toggleButton.addEventListener('click', function(event){
            event.preventDefault();
            toggleButton.classList.toggle('is-clicked');
            siteBody.classList.toggle('menu-is-open');
        });

        headerNavWrap.querySelectorAll('.s-header__nav a').forEach(function(link) {
            link.addEventListener("click", function(evt) {

                // at 800px and below
                if (window.matchMedia('(max-width: 800px)').matches) {
                    toggleButton.classList.toggle('is-clicked');
                    siteBody.classList.toggle('menu-is-open');
                }
            });
        });

        window.addEventListener('resize', function() {

            if (window.matchMedia('(min-width: 801px)').matches) {
                if (siteBody.classList.contains('menu-is-open')) siteBody.classList.remove('menu-is-open');
                if (toggleButton.classList.contains("is-clicked")) toggleButton.classList.remove("is-clicked");
            }
        });

    }; 



    const ssScrollSpy = function() {

        const sections = document.querySelectorAll(".target-section");

        window.addEventListener("scroll", navHighlight);

        function navHighlight() {
        

            let scrollY = window.pageYOffset;
        
      
            sections.forEach(function(current) {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 50;
                const sectionId = current.getAttribute("id");
            
              
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelector(".s-header__nav a[href*=" + sectionId + "]").parentNode.classList.add("current");
                } else {
                    document.querySelector(".s-header__nav a[href*=" + sectionId + "]").parentNode.classList.remove("current");
                }
            });
        }

    }; 


  
    const ssSwiper = function() {

        const mySwiper = new Swiper('.swiper-container', {

            slidesPerView: 1,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },          
            breakpoints: {
                401: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                801: {
                    slidesPerView: 2,
                    spaceBetween: 48
                }
            }
         });

    }; 


   
    const ssLightbox = function() {

        const folioLinks = document.querySelectorAll('.folio-item a');
        const modals = [];

        folioLinks.forEach(function(link) {
            let modalbox = link.getAttribute('href');
            let instance = basicLightbox.create(
                document.querySelector(modalbox),
                {
                    onShow: function(instance) {

                        document.addEventListener("keydown", function(evt) {
                            evt = evt || window.event;
                            if(evt.keyCode === 27){
                            instance.close();
                            }
                        });
                    }
                }
            )
            modals.push(instance);
        });

        folioLinks.forEach(function(link, index) {
            link.addEventListener("click", function(e) {
                e.preventDefault();
                modals[index].show();
            });
        });

    };  


       const ssAlertBoxes = function() {

        const boxes = document.querySelectorAll('.alert-box');
  
        boxes.forEach(function(box) {

            box.addEventListener('click', function(e){
                if (e.target.matches(".alert-box__close")) {
                    e.stopPropagation();
                    e.target.parentElement.classList.add("hideit");

                    setTimeout(function() {
                        box.style.display = "none";
                    }, 500)
                }    
            });

        })

    }; 
    const ssSmoothScroll = function () {
        
        const triggers = document.querySelectorAll(".smoothscroll");

        triggers.forEach(function(trigger) {
            trigger.addEventListener("click", function() {
                const target = trigger.getAttribute("href");

                Jump(target, {
                    duration: 1200,
                });
            });
        });

    }; 
    const ssBackToTop = function() {

        const pxShow = 900;
        const goTopButton = document.querySelector(".ss-go-top");

        if (!goTopButton) return;


        if (window.scrollY >= pxShow) goTopButton.classList.add("link-is-visible");

        window.addEventListener('scroll', function() {
            if (window.scrollY >= pxShow) {
                if(!goTopButton.classList.contains('link-is-visible')) goTopButton.classList.add("link-is-visible")
            } else {
                goTopButton.classList.remove("link-is-visible")
            }
        });

    }; 
    (function ssInit() {

        ssPreloader();
        ssParallax();
        ssMoveHeader();
        ssMobileMenu();
        ssScrollSpy();
        ssSwiper();
        ssLightbox();
        ssAlertBoxes();
        ssSmoothScroll();
        ssBackToTop();

    })();

})(document.documentElement);