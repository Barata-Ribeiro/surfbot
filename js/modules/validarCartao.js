export default class ValidarCartao {
    constructor(element) {
        this.element = element;
    }

    // Remove caracteres não numéricos do número do cartão
    limpar(numero) {
        return numero.replace(/\D/g, '');
    }

    // Método para construir o número do cartão
    construir(numero) {
        // Constrói o número do cartão com o formato 0000 0000 0000 0000
        if (numero.length === 16) {
            return numero.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/g, '$1 $2 $3 $4');
        }
        return numero;
    }

    // Método para formatar o número do cartão
    formatar(numero) {
        // Primeiro limpa o número do cartão
        const numeroLimpo = this.limpar(numero);
        // Retorna o número do cartão formatado
        return this.construir(numeroLimpo);
    }

    // Método para validar o número do cartão
    validarNumero(numero) {
        // Verifica se o número do cartão é válido com match
        const matchNumero = numero.match(/(?:\d{4}[-.\s]?){3}\d{4}/g);
        // Verifica se o número do cartão é igual ao padrão
        return matchNumero && matchNumero[0] === numero;
    }

    // Verifica se a data de expiração do cartão é válida
    validarData(mes, ano) {
        const dataAtual = new Date();
        const anoAtual = dataAtual.getFullYear();
        const mesAtual = dataAtual.getMonth() + 1;
        return !(ano < anoAtual || (ano === anoAtual && mes < mesAtual));
    }

    // Adiciona eventos de validação aos elementos do cartão
    adicionarEventos() {
        const numeroElement = this.element.querySelector('#numero-cartao');
        const mesElement = this.element.querySelector('#mes-cartao');
        const anoElement = this.element.querySelector('#ano-cartao');

        numeroElement.addEventListener('input', () => {
            const numeroFormatado = this.formatar(numeroElement.value);
            numeroElement.value = numeroFormatado;

            if (this.validarNumero(numeroFormatado)) {
                this.errorElement.style.visibility = 'hidden';
            } else {
                this.errorElement.innerText = 'Número do cartão inválido';
                this.errorElement.style.visibility = 'visible';
            }
        });

        mesElement.addEventListener('change', () => {
            if (this.validarData(mesElement.value, anoElement.value)) {
                this.errorElement.style.visibility = 'hidden';
            } else {
                this.errorElement.innerText = 'Data de expiração inválida';
                this.errorElement.style.visibility = 'visible';
            }
        });

        anoElement.addEventListener('change', () => {
            if (this.validarData(mesElement.value, anoElement.value)) {
                this.errorElement.style.visibility = 'hidden';
            } else {
                this.errorElement.innerText = 'Data de expiração inválida';
                this.errorElement.style.visibility = 'visible';
            }
        });
    }

    // Adiciona o balão de erro
    adicionarBalaoErro() {
        const errorElement = document.createElement('div');
        errorElement.classList.add('balaoError');
        errorElement.style.visibility = 'hidden';
        const wrapper = this.element;
        wrapper.style.position = 'relative';
        wrapper.appendChild(errorElement);
        this.errorElement = errorElement;
    }

    // Inicializa a classe ValidarCartao
    init() {
        this.adicionarEventos();
        this.adicionarBalaoErro();
        return this;
    }
}
