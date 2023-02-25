const agora = new Date();
const horaAtual = agora.getHours();
const minutoAtual = agora.getMinutes();

const horaAbertura = 6;
const minutoAbertura = 0;
const horaFechamento = 14;
const minutoFechamento = 0;

if (horaAtual > horaAbertura && horaAtual < horaFechamento) {
    // A loja está aberta
    document.querySelector('.horario').classList.add('aberto');
} else if (horaAtual === horaAbertura && minutoAtual >= minutoAbertura) {
    // A loja acabou de abrir
    document.querySelector('.horario').classList.add('aberto');
} else if (horaAtual === horaFechamento && minutoAtual < minutoFechamento) {
    // A loja está prestes a fechar
    document.querySelector('.horario').classList.add('aberto');
} else {
    // A loja está fechada
    document.querySelector('.horario').classList.add('fechado');
}

const menuLinks = document.querySelectorAll('nav a[href*="#"]');
menuLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetID = link.getAttribute('href');
        const targetElement = document.querySelector(targetID);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});
