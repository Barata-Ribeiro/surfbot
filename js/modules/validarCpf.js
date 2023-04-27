export default class ValidarCpf {
    constructor(element) {
        // this.element é o elemento do formulário
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

    // Método para limpar o CPF
    limpar(cpf) {
        // Limpa os dígitos do CPF
        return cpf.replace(/\D/g, '');
    }

    // Método para construir o CPF
    construir(cpf) {
        // Constrói o CPF com o formato 000.000.000-00
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
    }

    // Método para formatar o CPF
    formatar(cpf) {
        // Primeiro limpa o CPF
        const cpfLimpo = this.limpar(cpf);
        // Retorna o CPF formatado
        return this.construir(cpfLimpo);
    }

    // Método para validar o CPF
    validar(cpf) {
        // Verifica se o CPF é válido com match
        const matchCpf = cpf.match(/(?:\d{3}[-.\s]?){3}\d{2}/g);
        // Verifica se o CPF é igual ao padrão
        return matchCpf && matchCpf[0] === cpf;
    }

    // Método para validar o CPF na mudança
    validarNaMudanca(cpfElement) {
        this.debounce(() => {
            if (this.validar(cpfElement.value) || cpfElement.value.length > 11) {
                cpfElement.value = this.formatar(cpfElement.value);
                cpfElement.setCustomValidity('');
            } else {
                cpfElement.setCustomValidity('CPF inválido \n Formato: 000.000.000-00');
            }
            cpfElement.reportValidity();
        }, 1000); // 1000 ms (1 segundo) de espera após o usuário parar de digitar
    }

    // Método que adiciona um evento para o formulário
    adicionarEvento() {
        this.element.addEventListener('input', () => {
            this.validarNaMudanca(this.element);
        });
    }

    // Método que inicializa o objeto
    init() {
        // Adicionar um evento ao formulário
        this.adicionarEvento();
        // Retorna o objeto
        return this;
    }
}
