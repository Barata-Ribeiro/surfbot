export default function initSmoothScroll() {
    const menuLinks = document.querySelectorAll('nav a[href*="#"]');

    menuLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
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
