export default class BurgerMenu {
    // Construtor da classe
    constructor(button, links, customNav, classOverlay, customClass, events) {
        // Seleção dos elementos do DOM
        this.btnMobile = document.getElementById(button || 'btn-mobile');
        this.links = document.querySelectorAll(links || '.header-menu ul a');
        this.nav = document.querySelector(customNav || '.header-menu');
        this.overlay = document.querySelector(classOverlay || '.overlay');

        // Classes CSS utilizadas
        this.activeClass = customClass || 'btnAtivo';
        this.overlayActiveClass = 'overlayAtivo';

        // Eventos padrão ou personalizados
        this.events = events || ['click', 'touchstart'];

        // Vinculação do contexto do método toggleMenu para a instância da classe
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    // Método que alterna a visibilidade do menu
    toggleMenu(event) {
        // Evita a ação padrão do evento touchstart
        if (event.type === 'touchstart') event.preventDefault();

        // Alterna a classe de atividade no menu
        this.nav.classList.toggle(this.activeClass);
        const active = this.nav.classList.contains(this.activeClass);

        // Atualiza o atributo 'aria-expanded' do botão do menu
        event.currentTarget.setAttribute('aria-expanded', active);

        // Atualiza o overlay e o scroll da página dependendo do estado do menu
        if (active) {
            event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
            this.overlay.classList.add(this.overlayActiveClass);
            document.body.style.overflow = 'hidden';
        } else {
            event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
            this.overlay.classList.remove(this.overlayActiveClass);
            document.body.style.overflow = '';
        }
    }

    // Método que adiciona os eventos de clique aos links do menu
    addLinkEvents() {
        this.links.forEach((link) => {
            link.addEventListener('click', () => {
                // Fecha o menu ao clicar em um link
                this.overlay.classList.remove(this.overlayActiveClass);
                this.nav.classList.remove(this.activeClass);
                document.body.style.overflow = '';
            });
        });
    }

    // Método que adiciona os eventos ao botão do menu
    addEvents() {
        this.events.forEach((event) => {
            this.btnMobile.addEventListener(event, this.toggleMenu);
        });
    }

    // Método que inicializa a classe e adiciona os eventos
    init() {
        this.addEvents();
        this.addLinkEvents();
        // Retorna a instância da classe para encadeamento de métodos
        return this;
    }
}
