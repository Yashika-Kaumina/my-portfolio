// ===== TYPING ANIMATION =====
const typedText = document.getElementById('typed-text');
const words = ['Frontend Developer', 'Full-Stack Developer', 'ML Enthusiast', 'Problem Solver'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    if (!typedText) return;

    const currentWord = words[wordIndex];
    typedText.textContent = currentWord.substring(0, charIndex + (isDeleting ? -1 : 1));
    charIndex += isDeleting ? -1 : 1;

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1600);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 380);
        return;
    }

    setTimeout(typeEffect, isDeleting ? 55 : 105);
}

typeEffect();

// ===== MOBILE NAVIGATION =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

function closeMenu() {
    if (!menuToggle || !navLinks) return;
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation menu');
    navLinks.classList.remove('is-open');
}

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', String(!isOpen));
        menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
        navLinks.classList.toggle('is-open', !isOpen);
    });

    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeMenu();
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 820) closeMenu();
    });
}
