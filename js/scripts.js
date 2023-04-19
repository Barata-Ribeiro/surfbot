import initBurgerMenu from './modules/menuHamburger.js';
import initTimeCheck from './modules/timeChecker.js';
import initSmoothScroll from './modules/smoothScroll.js';
import ValidarCpf from './modules/validarCpf.js';
import initFetchCity from './modules/fetchCity.js';
import initPaymentType from './modules/paymentType.js';
import initPlanType from './modules/planType.js';
import initEmailHref from './modules/emailHref.js';

const cpfInput = document.getElementById('cpf');
const validarCpf = new ValidarCpf(cpfInput).init();

initBurgerMenu();
initTimeCheck();
initSmoothScroll();
initFetchCity();
initPaymentType();
initPlanType();
initEmailHref();
