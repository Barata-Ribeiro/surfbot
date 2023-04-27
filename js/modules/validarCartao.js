export default class ValidarCartao {
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
            this.debounce(() => {
                const numeroFormatado = this.formatar(numeroElement.value);
                numeroElement.value = numeroFormatado;

                if (this.validarNumero(numeroFormatado)) {
                    numeroElement.setCustomValidity('');
                } else {
                    numeroElement.setCustomValidity('Número do cartão inválido');
                }
                numeroElement.reportValidity();
            }, 1000); // 1000 ms (1 segundo) de espera após o usuário parar de digitar
        });

        mesElement.addEventListener('change', () => {
            this.debounce(() => {
                if (this.validarData(mesElement.value, anoElement.value)) {
                    mesElement.setCustomValidity('');
                } else {
                    mesElement.setCustomValidity('Data de expiração inválida');
                }
                mesElement.reportValidity();
            }, 1000); // 1000 ms (1 segundo) de espera após o usuário parar de digitar
        });

        anoElement.addEventListener('change', () => {
            this.debounce(() => {
                if (this.validarData(mesElement.value, anoElement.value)) {
                    anoElement.setCustomValidity('');
                } else {
                    anoElement.setCustomValidity('Data de expiração inválida');
                }
                anoElement.reportValidity();
            }, 1000); // 1000 ms (1 segundo) de espera após o usuário parar de digitar
        });
    }

    // Inicializa a classe ValidarCartao
    init() {
        this.adicionarEventos();
        return this;
    }
}
