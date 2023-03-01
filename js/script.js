function initBtnMobile() {
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
initBtnMobile();

function initTimeCheck() {
    const agora = new Date();
    const horaAtual = agora.getHours();
    const minutoAtual = agora.getMinutes();

    const horaAbertura = 6;
    const minutoAbertura = 0;
    const horaFechamento = 14;
    const minutoFechamento = 0;

    if (horaAtual > horaAbertura && horaAtual < horaFechamento) {
        // A loja está aberta
        document.querySelector('.horario').classList.add('aberto');
    } else if (horaAtual === horaAbertura && minutoAtual >= minutoAbertura) {
        // A loja acabou de abrir
        document.querySelector('.horario').classList.add('aberto');
    } else if (horaAtual === horaFechamento && minutoAtual < minutoFechamento) {
        // A loja está prestes a fechar
        document.querySelector('.horario').classList.add('aberto');
    } else {
        // A loja está fechada
        document.querySelector('.horario').classList.add('fechado');
    }
}
initTimeCheck();

function initSmoothScroll() {
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
initSmoothScroll();
