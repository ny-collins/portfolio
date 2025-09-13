lucide.createIcons();
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenuButton.addEventListener('click', () => { mobileMenu.classList.toggle('hidden'); });
        document.querySelectorAll('#mobile-menu a').forEach(link => { link.addEventListener('click', () => { mobileMenu.classList.add('hidden'); }); });
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => { window.scrollY > 50 ? header.classList.add('glass-effect', 'shadow-lg') : header.classList.remove('glass-effect', 'shadow-lg'); });
        const revealElements = document.querySelectorAll('.reveal');
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
        }, { threshold: 0.1 });
        revealElements.forEach(element => { revealObserver.observe(element); });
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => { if (pageYOffset >= section.offsetTop - 150) { current = section.getAttribute('id'); } });
            navLinks.forEach(link => {
                link.classList.remove('active', 'text-sky-400');
                if (link.getAttribute('href').includes(current)) { link.classList.add('active', 'text-sky-400'); } else { link.classList.add('text-slate-300'); }
            });
        });
        document.getElementById('year').textContent = new Date().getFullYear();
