export default function initTimeCheck() {
    if (window.location.href === './index.html') {
        const agora = new Date(); // Cria uma variável "agora" com a data e hora atuais
        const horaAtual = agora.getHours(); // Obtém a hora atual a partir da data "agora"
        const minutoAtual = agora.getMinutes(); // Obtém o minuto atual a partir da data "agora"

        const horaAbertura = 6; // Define a hora de abertura da loja como 6
        const minutoAbertura = 0; // Define o minuto de abertura da loja como 0
        const horaFechamento = 14; // Define a hora de fechamento da loja como 14
        const minutoFechamento = 0; // Define o minuto de fechamento da loja como 0

        if (horaAtual > horaAbertura && horaAtual < horaFechamento) {
            // Se a hora atual estiver entre a hora de abertura e fechamento da loja
            // A loja está aberta
            document.querySelector('.horario').classList.add('aberto'); // Adiciona a classe "aberto" ao elemento com a classe "horario"
        } else if (
            horaAtual === horaAbertura &&
            minutoAtual >= minutoAbertura
        ) {
            // Se a hora atual for igual à hora de abertura e o minuto atual for maior ou igual ao minuto de abertura
            // A loja acabou de abrir
            document.querySelector('.horario').classList.add('aberto'); // Adiciona a classe "aberto" ao elemento com a classe "horario"
        } else if (
            horaAtual === horaFechamento &&
            minutoAtual < minutoFechamento
        ) {
            // Se a hora atual for igual à hora de fechamento e o minuto atual for menor que o minuto de fechamento
            // A loja está prestes a fechar
            document.querySelector('.horario').classList.add('aberto'); // Adiciona a classe "aberto" ao elemento com a classe "horario"
        } else {
            // A loja está fechada
            document.querySelector('.horario').classList.add('fechado'); // Adiciona a classe "fechado" ao elemento com a classe "horario"
        }
    }
}
