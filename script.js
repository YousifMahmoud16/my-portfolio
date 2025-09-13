// script.js
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinkAnchors = document.querySelectorAll('.nav-links a');
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section[id]');

    // Toggle mobile menu
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('open');
            navToggle.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        // Close menu when a link is clicked
        navLinkAnchors.forEach(a => {
            a.addEventListener('click', () => {
                if (navLinks.classList.contains('open')) {
                    navLinks.classList.remove('open');
                    navToggle.classList.remove('open');
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });

        // Close menu on resize to larger screens
        window.addEventListener('resize', () => {
            if (window.innerWidth > 900) {
                navLinks.classList.remove('open');
                navToggle.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Scroll spy: highlight active nav link + navbar scrolled background
    function onScroll() {
        const scrollPos = window.scrollY + 120; // offset to trigger a bit earlier

        // toggle navbar background
        if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 40);

        sections.forEach(sec => {
            const top = sec.offsetTop;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');
            const link = document.querySelector(`.nav-links a[href="#${id}"]`);
            if (!link) return;

            link.classList.remove('active');
            if (scrollPos >= top && scrollPos < top + height) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', onScroll);
    // run once on load
    onScroll();
});
