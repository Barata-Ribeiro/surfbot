export default class ValidarCep {
    constructor(element) {
        this.element = element;
        this.timeout = null;
    }

    // Método debounce para executar uma função após um determinado atraso
    debounce(fn, delay) {
        // Limpa o temporizador atual, se houver algum, para evitar a execução múltipla da função
        clearTimeout(this.timeout);

        // Define um novo temporizador com a função e o atraso fornecidos
        this.timeout = setTimeout(() => {
            // Executa a função fornecida quando o atraso expirar
            fn();
        }, delay);
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
        this.debounce(() => {
            if (this.validar(cepElement.value) || cepElement.value.length > 9) {
                cepElement.value = this.formatar(cepElement.value);
                cepElement.setCustomValidity('');
            } else {
                cepElement.setCustomValidity('CEP inválido \n Formato: 00000-000');
            }
            cepElement.reportValidity();
        }, 1000); // 1000 ms (1 segundo) de espera após o usuário parar de digitar
    }

    // Adiciona o evento de mudança ao elemento
    adicionarEvento() {
        this.element.addEventListener('input', () => {
            this.validarNaMudanca(this.element);
        });
    }

    // Inicializa a classe
    init() {
        this.adicionarEvento();
        return this;
    }
}
