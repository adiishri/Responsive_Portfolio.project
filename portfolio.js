document.addEventListener("DOMContentLoaded", function() {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    if (menuIcon) {
        menuIcon.onclick = () => {
            menuIcon.classList.toggle('fa-xmark');
            navbar.classList.toggle('active');
        };
    }

    let sections = document.querySelectorAll('section'); 
    let navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => { // Corrected typo from 'windows' to 'window'
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => { // Corrected forEach syntax
                    link.classList.remove('active'); // Corrected typo 'avtive' to 'active'
                    let activeLink = document.querySelector('header nav a[href*=' + id + ']');
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                });
            }
        });

        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);

        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    };

    // Initialize ScrollReveal
    ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200,
    });

    // Revealing elements using ScrollReveal
    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' }); // Fixed comma placement
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

    // Initialize Typed.js
    const typed = new Typed('.multiple-text', {
        strings: ['Web Development', 'Web Designing', 'Software Engineering', 'AI/ML transformations.'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true,
    });
});
