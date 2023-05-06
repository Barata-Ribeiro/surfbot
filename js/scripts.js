import BurgerMenu from './modules/menuHamburger.js';
import Operations from './modules/operations.js';
import SmoothScroll from './modules/smoothScroll.js';
import ValidarCpf from './modules/validarCpf.js';
import ValidarCep from './modules/validarCep.js';
import ValidarCartao from './modules/validarCartao.js';
import FetchCity from './modules/fetchCity.js';
import initPaymentType from './modules/paymentType.js';
import initPlanType from './modules/planType.js';
import IntroEmail from './modules/introEmail.js';

// Função para retornar uma promessa quando o evento 'load' for disparado
function windowLoaded() {
    // Retorna uma nova promessa
    return new Promise((resolve) => {
        // Adiciona um eventListener à window com o evento 'load'
        // Resolve a promessa quando este evento ocorrer
        window.addEventListener('load', resolve);
    });
}

// Função assíncrona para inicializar a aplicação
async function init() {
    // Verifica se o documento ainda está carregando
    if (document.readyState === 'loading') {
        // Aguarda a promessa 'windowLoaded' ser resolvida
        await windowLoaded();
    }

    // Seleciona os elementos do DOM necessários
    const cpfInput = document.getElementById('cpf');
    const cepInput = document.getElementById('cep');
    const formCartaoElement = document.getElementById('form-pagamento-cartao');
    const operationsElement = document.querySelector('[data-semana]');

    // Verifica se os elementos necessários estão presentes
    if (cpfInput && cepInput && formCartaoElement) {
        // Inicializa a validação de CPF, CEP e cartão de crédito
        new ValidarCpf(cpfInput).init();
        new ValidarCep(cepInput).init();
        new ValidarCartao(formCartaoElement).init();

        // Inicializa a busca da cidade de acordo com o estado selecionado
        const fetchCity = new FetchCity('estado', 'cidade');
        fetchCity.init();

        // Função para pegar a forma de pagamento e o plano escolhido
        initPaymentType();
        initPlanType();
    }

    // Verifica se 'data-semana' está presente
    if (operationsElement) {
        // Inicializa a classe que verifica o horário de funcionamento da empresa
        const operations = new Operations('[data-semana', 'aberto');
        operations.init();
    }

    // Inicializa o scroll suave
    const smoothScroll = new SmoothScroll('[data-menu="smooth"] a[href^="#"]');
    smoothScroll.init();

    // Verifica se há um parâmetro de consulta 'scrollTo' na URL e aplica o scroll suave
    const urlParams = new URLSearchParams(window.location.search);

    // Verifica se o parâmetro 'scrollTo' está presente na URL
    if (urlParams.has('scrollTo')) {
        // Obtém o valor do parâmetro 'scrollTo' e decodifica
        // para converter quaisquer caracteres especiais codificados (por exemplo, '%23' para '#')
        const scrollTo = decodeURIComponent(urlParams.get('scrollTo'));

        // Seleciona o elemento do DOM que corresponde ao valor de 'scrollTo'
        const targetElement = document.querySelector(scrollTo);

        // Verifica se o 'targetElement' existe na página
        if (targetElement) {
            // Realiza o scroll suave até o 'targetElement' utilizando
            // as opções de smoothScroll
            targetElement.scrollIntoView(smoothScroll.options);
        }
    }

    // Inicializa o menu hamburger
    // >>>> Verificar o arquivo da classe 'BurgerMenu'
    // para entender como cada parâmetro é utilizado. <<<<
    const menuHamburger = new BurgerMenu('btn-mobile', '.header-menu ul a', '.header-menu', '.overlay');
    menuHamburger.init();

    // Parte de manipulação de email
    const currentPage = window.location.pathname.split('/').pop();

    let formId;
    let emailInputId;

    // Verifica se a página atual é a página inicial
    if (currentPage === 'index.html' || currentPage === '') {
        // Define o ID do formulário e do campo de email para os da página inicial
        formId = 'intro-form';
        emailInputId = 'intro_email';
    } else if (currentPage === 'matricula.html') {
        // Caso contrário, verifica se a página atual é a página de matrícula
        // Define o ID do formulário e do campo de email para os da página de matrícula
        formId = 'matricula-form';
        emailInputId = 'email';
    }

    // Se os IDs do formulário e do campo de email foram definidos com sucesso
    if (formId && emailInputId) {
        // Cria um novo objeto IntroEmail com os IDs do formulário e do campo de email
        const introEmail = new IntroEmail(formId, emailInputId);
        introEmail.init();
    }
}

// Chama a função 'init' para inicializar a aplicação
init();
