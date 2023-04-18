export default function initBurgerMenu() {
    const btnMobile = document.getElementById('btn-mobile');

    function toggleMenu(event) {
        if (event.type === 'touchstart') event.preventDefault();
        const nav = document.querySelector('.header-menu');
        nav.classList.toggle('btnAtivo');
        const active = nav.classList.contains('btnAtivo');
        event.currentTarget.setAttribute('aria-expanded', active);
        const overlay = document.querySelector('.overlay');
        if (active) {
            event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
            overlay.classList.add('overlayAtivo');
            document.body.style.overflow = 'hidden';
        } else {
            event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
            overlay.classList.remove('overlayAtivo');
            document.body.style.overflow = '';
        }

        const links = document.querySelectorAll('.header-menu ul a');
        links.forEach((link) => {
            link.addEventListener('click', () => {
                overlay.classList.remove('overlayAtivo');
                nav.classList.remove('btnAtivo');
                document.body.style.overflow = '';
            });
        });
    }

    btnMobile.addEventListener('click', toggleMenu);
    btnMobile.addEventListener('touchstart', toggleMenu);
}
