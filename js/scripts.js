import initBurgerMenu from './modules/menuHamburger.js';
import Operations from './modules/operations.js';
import SmoothScroll from './modules/smoothScroll.js';
import ValidarCpf from './modules/validarCpf.js';
import ValidarCep from './modules/validarCep.js';
import ValidarCartao from './modules/validarCartao.js';
import initFetchCity from './modules/fetchCity.js';
import initPaymentType from './modules/paymentType.js';
import initPlanType from './modules/planType.js';
import initEmailHref, { addEmail } from './modules/emailHref.js';

// Função para retornar uma promessa quando o evento 'DOMContentLoaded' for disparado
function domContentLoaded() {
    // Retorna uma nova promessa
    return new Promise((resolve) => {
        // Adiciona um eventListener ao document com o evento 'DOMContentLoaded'
        // e resolve a promessa quando este ocorrer
        document.addEventListener('DOMContentLoaded', resolve);
    });
}

// Função assíncrona para inicializar a aplicação
async function init() {
    // Verifica se o documento ainda está carregando
    if (document.readyState === 'loading') {
        // Aguarda a promessa 'domContentLoaded' ser resolvida
        await domContentLoaded();
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

        // Inicializa funções adicionais
        initFetchCity();
        initPaymentType();
        initPlanType();
    }

    // Verifica se o elemento operation está presente
    if (operationsElement) {
        const operations = new Operations('[data-semana', 'aberto');
        operations.init();
    }

    const smoothScroll = new SmoothScroll('[data-menu="smooth"] a[href^="#"]');
    smoothScroll.init();

    // Verifica se há um parâmetro de consulta 'scrollTo' e aplica o smoothScroll.
    const urlParams = new URLSearchParams(window.location.search);
    // Verifica se o parâmetro de consulta 'scrollTo' está presente na URL.
    if (urlParams.has('scrollTo')) {
        // Caso esteja presente, obtém o valor do parâmetro 'scrollTo' e decodifica
        // para converter quaisquer caracteres especiais codificados (por exemplo, '%23' para '#').
        const scrollTo = decodeURIComponent(urlParams.get('scrollTo'));

        // Seleciona o elemento do DOM que corresponde ao valor de 'scrollTo'.
        const targetElement = document.querySelector(scrollTo);

        // Verifica se o 'targetElement' existe na página.
        if (targetElement) {
            // Caso exista, aplica o scroll suave até o 'targetElement' utilizando
            // as opções de smoothScroll.
            targetElement.scrollIntoView(smoothScroll.options);
        }
    }

    // Inicializa outras funções da aplicação
    initBurgerMenu();
    initEmailHref();
}

// Chama a função 'init' para inicializar a aplicação
init();
