import initBurgerMenu from './modules/menuHamburger.js';
import TimeCheck from './modules/timeChecker.js';
import initSmoothScroll from './modules/smoothScroll.js';
import ValidarCpf from './modules/validarCpf.js';
import initFetchCity from './modules/fetchCity.js';
import initPaymentType from './modules/paymentType.js';
import initPlanType from './modules/planType.js';
import initEmailHref, { addEmail } from './modules/emailHref.js';
import ValidarCep from './modules/validarCep.js';
import ValidarCartao from './modules/validarCartao.js';

function domContentLoaded() {
    return new Promise((resolve) => {
        document.addEventListener('DOMContentLoaded', resolve);
    });
}

async function init() {
    if (document.readyState === 'loading') {
        await domContentLoaded();
    }

    const cpfInput = document.getElementById('cpf');
    const cepInput = document.getElementById('cep');
    const formCartaoElement = document.getElementById('form-pagamento-cartao');
    const operationsElement = document.querySelector('[data-semana]');

    if (cpfInput && cepInput && formCartaoElement) {
        new ValidarCpf(cpfInput).init();
        new ValidarCep(cepInput).init();
        new ValidarCartao(formCartaoElement).init();

        initFetchCity();
        initPaymentType();
        initPlanType();
    }

    if (operationsElement) {
        new TimeCheck(operationsElement).init();
        // A seguinte linha só é necessária se você quiser usar as classes personalizadas.
        // new TimeCheck(operacaoElement, 'customOpenClass', 'customClosedClass').init();
    }

    initBurgerMenu();
    initSmoothScroll();
    initEmailHref();
}

init();
