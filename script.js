document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            // Apenas liga/desliga a visibilidade. O Tailwind resolve o resto.
            navMenu.classList.toggle('hidden');
        });
    }
});