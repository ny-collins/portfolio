// Lucide Icons
lucide.createIcons();

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    window.scrollY > 50 ? header.classList.add('glass-effect', 'shadow-lg') : header.classList.remove('glass-effect', 'shadow-lg');
});

// Mobile Menu Slide-in Logic
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');
const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');

const toggleMenu = () => {
    mobileMenu.classList.toggle('translate-x-full');
    mobileMenuBackdrop.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden');
};

mobileMenuButton.addEventListener('click', toggleMenu);
mobileMenuBackdrop.addEventListener('click', toggleMenu);
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});


// Reveal on scroll animation
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});
revealElements.forEach(element => {
    revealObserver.observe(element);
});

// Active Nav Link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header .nav-link');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active', 'text-sky-400');
        link.classList.add('text-slate-300');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active', 'text-sky-400');
        }
    });
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();
