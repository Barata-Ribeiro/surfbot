import initBurgerMenu from './modules/menuHamburger.js';
import initTimeCheck from './modules/timeChecker.js';
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

    if (new URL(window.location.href).pathname === '/matricula.html') {
        const cpfInput = document.getElementById('cpf');
        new ValidarCpf(cpfInput).init();

        const cepInput = document.getElementById('cep');
        new ValidarCep(cepInput).init();

        const formCartaoElement = document.getElementById('form-pagamento-cartao');
        new ValidarCartao(formCartaoElement).init();

        initFetchCity();
        initPaymentType();
        initPlanType();
    } else {
        initBurgerMenu();
        initTimeCheck();
        initSmoothScroll();
    }
    initEmailHref();
}

init();
