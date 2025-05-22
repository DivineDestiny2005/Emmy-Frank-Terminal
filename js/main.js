document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.main-nav')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Sticky Navigation
    const mainNav = document.querySelector('.main-nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            mainNav.classList.remove('scroll-up');
            return;
        }

        if (currentScroll > lastScroll && !mainNav.classList.contains('scroll-down')) {
            // Scroll Down
            mainNav.classList.remove('scroll-up');
            mainNav.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && mainNav.classList.contains('scroll-down')) {
            // Scroll Up
            mainNav.classList.remove('scroll-down');
            mainNav.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });

    // News Grid Animation
    const newsItems = document.querySelectorAll('.news-grid > *');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    newsItems.forEach(item => {
        observer.observe(item);
    });

    // Statistics Counter Animation
    const stats = document.querySelectorAll('.stat-item h3');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseInt(target.textContent);
                let currentValue = 0;
                const duration = 2000; // 2 seconds
                const increment = finalValue / (duration / 16); // 60fps

                const counter = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= finalValue) {
                        target.textContent = finalValue + '+';
                        clearInterval(counter);
                    } else {
                        target.textContent = Math.floor(currentValue) + '+';
                    }
                }, 16);

                statsObserver.unobserve(target);
            }
        });
    }, observerOptions);

    stats.forEach(stat => {
        statsObserver.observe(stat);
    });

    // Language Selector
    const languageSelector = document.querySelector('.language-selector');
    if (languageSelector) {
        languageSelector.addEventListener('change', function() {
            // Here you would typically handle language change
            console.log('Language changed to:', this.value);
            // Implement your language switching logic here
        });
    }

    // Initialize any carousels or sliders
    function initCarousels() {
        // Add your carousel initialization code here
        // Example: new Swiper('.swiper-container', {...});
    }

    // Initialize any maps
    function initMaps() {
        // Add your map initialization code here
        // Example: new google.maps.Map(document.querySelector('.map-container'), {...});
    }

    // Create and insert navigation bar
    function createNavigation() {
        const nav = document.querySelector('.main-nav');
        if (nav) {
            nav.innerHTML = `
                <div class="container">
                    <div class="nav-wrapper">
                        <a href="index.html" class="logo">
                            <img src="images/logo.png" alt="Global Port Terminals">
                        </a>
                        <button class="mobile-menu-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <ul class="nav-links">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="terminals.html">Terminals</a></li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="news.html">News & Media</a></li>
                            <li><a href="careers.html">Careers</a></li>
                            <li><a href="contact.html">Contact</a></li>
                            <li><a href="staff-portal.html" class="staff-portal-btn">Staff Portal</a></li>
                        </ul>
                    </div>
                </div>
            `;
        }
    }

    // Call initialization functions
    initCarousels();
    initMaps();
    createNavigation();
}); 