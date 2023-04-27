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
        // Cria um objeto Date com a data atual
        const dataAtual = new Date();
        // Obtém o ano atual
        const anoAtual = dataAtual.getFullYear();
        // Obtém o mês atual (adiciona 1 para obter o mês no formato 1-12)
        const mesAtual = dataAtual.getMonth() + 1;

        // Converte o ano de string para número inteiro
        const anoInt = parseInt(ano, 10);
        // Converte o mês de string para número inteiro
        const mesInt = parseInt(mes, 10);

        // Verifica se o ano informado é menor que o ano atual
        if (anoInt < anoAtual) {
            // Retorna falso se o ano informado for menor que o ano atual
            return false;
        }
        // Verifica se o ano informado é igual ao ano atual
        // e se o mês informado é menor ou igual ao mês atual
        if (anoInt === anoAtual && mesInt <= mesAtual) {
            // Retorna falso se o mês informado for menor ou igual ao mês atual no mesmo ano
            return false;
        }
        // Retorna verdadeiro se a data de expiração for maior do que a data atual
        return true;
    }

    // Adiciona eventos de validação aos elementos do cartão
    adicionarEventos() {
        const numeroElement = this.element.querySelector('#numero-cartao');
        const mesElement = this.element.querySelector('#mes-cartao');
        const anoElement = this.element.querySelector('#ano-cartao');

        const atualizarBordaData = () => {
            if (this.validarData(mesElement.value, anoElement.value)) {
                mesElement.style.border = '1px solid #c3ccd9';
                anoElement.style.border = '1px solid #c3ccd9';
                mesElement.setCustomValidity('');
            } else {
                mesElement.style.border = '2px solid red';
                anoElement.style.border = '2px solid red';
                mesElement.setCustomValidity('Data de expiração inválida');
            }
            mesElement.reportValidity();
        };

        numeroElement.addEventListener('input', () => {
            this.debounce(() => {
                const numeroFormatado = this.formatar(numeroElement.value);
                numeroElement.value = numeroFormatado;

                if (this.validarNumero(numeroFormatado)) {
                    numeroElement.setCustomValidity('');
                    numeroElement.style.border = '1px solid #c3ccd9';
                } else {
                    numeroElement.style.border = '2px solid red';
                    numeroElement.setCustomValidity('Número do cartão inválido');
                }
                numeroElement.reportValidity();
            }, 1000); // 1000 ms (1 segundo) de espera após o usuário parar de digitar
        });

        mesElement.addEventListener('change', () => {
            this.debounce(atualizarBordaData, 1000);
        });

        anoElement.addEventListener('change', () => {
            this.debounce(atualizarBordaData, 1000);
        });
    }

    // Inicializa a classe ValidarCartao
    init() {
        this.adicionarEventos();
        return this;
    }
}
