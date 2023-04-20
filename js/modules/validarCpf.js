export default class ValidarCpf {
    constructor(element) {
        // this.element é o elemento do formulário
        this.element = element;
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
        // Se o CPF estiver válido...
        if (this.validar(cpfElement.value)) {
            // Retorna o CPF formatado para o usuário
            cpfElement.value = this.formatar(cpfElement.value);
            // Oculta o balão de erro
            this.errorElement.style.visibility = 'hidden';
        } else {
            // Mostra o balão de erro
            this.errorElement.style.visibility = 'visible';
        }
    }

    // Método que adiciona um evento para o formulário
    adicionarEvento() {
        // O evento de 'change' é executado quando o CPF for alterado
        this.element.addEventListener('change', () => {
            // Realiza a validação do CPF na mudança
            this.validarNaMudanca(this.element);
        });
    }

    // Método que adiciona um span com o texto 'CPF inválido'
    adicionarBalaoError() {
        // Cria um div
        const errorElement = document.createElement('div');
        // Adiciona a classe 'balaoError' ao div
        errorElement.classList.add('balaoError');
        // Adiciona o texto 'CPF inválido' ao div
        errorElement.innerText = 'CPF inválido \n Formato: xxx.xxx.xxx-xx';
        // Adiciona o div no wrapper
        const wrapper = this.element.parentElement;
        wrapper.appendChild(errorElement);
        // Adiciona a referência do elemento de erro ao objeto
        this.errorElement = errorElement;
    }

    // Método que inicializa o objeto
    init() {
        // Adicionar um evento ao formulário
        this.adicionarEvento();
        // Adicionar um balão com o texto 'CPF inválido'
        this.adicionarBalaoError();
        // Retorna o objeto
        return this;
    }
}
