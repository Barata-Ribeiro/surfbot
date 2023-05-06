export default class IntroEmail {
    constructor(form, emailInputId) {
        // Armazena o ID do formulário passado como argumento
        this.formId = form;
        // Armazena o ID do campo de email passado como argumento
        this.emailInputId = emailInputId;
        // Vincula o método 'addEmail' ao contexto atual da classe
        this.addEmail = this.addEmail.bind(this);
    }

    // Define o valor do campo de email com base no parâmetro da URL (se disponível)
    setEmailFromUrl() {
        // Obtém os parâmetros da URL
        const urlParams = new URLSearchParams(window.location.search);
        // Obtém o email dos parâmetros da URL
        const email = urlParams.get('intro_email');

        if (email) {
            // Define o valor do campo de email com o email da URL
            this.emailInput.value = email;
        }
    }

    // Adiciona o email ao atributo action do formulário e envia
    addEmail(event) {
        // Impede a submissão padrão do formulário
        event.preventDefault();
        // Define o atributo action do formulário
        this.emailForm.action = `./matricula.html?email=${encodeURIComponent(this.emailInput.value)}`;
        // Envia o formulário
        this.emailForm.submit();
    }

    // Adiciona o evento de envio do formulário
    emailEventListener() {
        this.emailForm.addEventListener('submit', this.addEmail);
    }

    init() {
        // Seleciona o formulário pelo ID
        this.emailForm = document.getElementById(this.formId);
        // Seleciona o campo de email pelo ID
        this.emailInput = this.emailForm?.querySelector(`input[id="${this.emailInputId}"]`);

        // Verifica se o formulário e o campo de email estão presentes
        if (this.emailForm && this.emailInput) {
            // Define o valor do campo de email com base na URL
            this.setEmailFromUrl();
            // Adiciona o evento de envio do formulário
            this.emailEventListener();
        }
    }
}
