export default class ValidarCep {
    constructor(element) {
        this.element = element;
    }

    // Remove caracteres não numéricos do CEP
    limpar(cep) {
        return cep.replace(/\D/g, '');
    }

    // Reconstrói o CEP e insere o hífen
    construir(cep) {
        return cep.replace(/(\d{5}[-\s]?)(\d{3})/g, '$1-$2');
    }

    // Formata o CEP de acordo com o regexp
    formatar(cep) {
        const cepLimpo = this.limpar(cep);
        return this.construir(cepLimpo);
    }

    // Verifica se o CEP é válido
    validar(cep) {
        const matchCep = cep.match(/(?:\d{5}[-.\s]?)\d{3}$/);
        return matchCep && matchCep[0] === cep;
    }

    // Valida o CEP quando o campo é alterado
    validarNaMudanca(cepElement) {
        if (this.validar(cepElement.value)) {
            cepElement.value = this.formatar(cepElement.value);
            this.errorElement.style.visibility = 'hidden';
        } else {
            // Mostra o balão de erro
            this.errorElement.style.visibility = 'visible';
        }
    }

    // Adiciona o evento de mudança ao elemento
    adicionarEvento() {
        this.element.addEventListener('change', () => {
            this.validarNaMudanca(this.element);
        });
    }

    // Adiciona o balão de erro ao elemento
    adicionarBalaoError() {
        // Cria um div
        const errorElement = document.createElement('div');
        // Adiciona a classe 'balaoError' ao div
        errorElement.classList.add('balaoError');
        // Adiciona o texto 'CEP inválido' ao div
        errorElement.innerText = 'CEP inválido \n Formato: xxxxx-xxx';
        // Adiciona o div no wrapper
        const wrapper = this.element.parentElement;
        wrapper.appendChild(errorElement);
        // Adiciona a referência do elemento de erro ao objeto
        this.errorElement = errorElement;
    }

    // Inicializa a classe
    init() {
        this.adicionarEvento();
        this.adicionarBalaoError();
        return this;
    }
}
