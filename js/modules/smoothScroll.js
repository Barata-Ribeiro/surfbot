export default function initSmoothScroll() {
    const menuLinks = document.querySelectorAll('nav a[href*="#"]');

    menuLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetID = link.getAttribute('href');
            const targetElement = document.querySelector(targetID);
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        });
    });
}
