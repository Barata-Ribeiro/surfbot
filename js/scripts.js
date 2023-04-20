import initBurgerMenu from './modules/menuHamburger.js';
import initTimeCheck from './modules/timeChecker.js';
import initSmoothScroll from './modules/smoothScroll.js';
import ValidarCpf from './modules/validarCpf.js';
import initFetchCity from './modules/fetchCity.js';
import initPaymentType from './modules/paymentType.js';
import initPlanType from './modules/planType.js';
import initEmailHref from './modules/emailHref.js';
import ValidarCep from './modules/validarCep.js';
import ValidarCartao from './modules/validarCartao.js';

if (new URL(window.location.href).pathname === '/matricula.html') {
    const cpfInput = document.getElementById('cpf');
    const validarCpf = new ValidarCpf(cpfInput).init();

    const cepInput = document.getElementById('cep');
    const validarCep = new ValidarCep(cepInput).init();

    const formCartaoElement = document.getElementById('form-pagamento-cartao');
    const validadorCartao = new ValidarCartao(formCartaoElement).init();

    initFetchCity();
    initPaymentType();
    initPlanType();
} else {
    initBurgerMenu();
    initTimeCheck();
    initSmoothScroll();
    initEmailHref();
}
