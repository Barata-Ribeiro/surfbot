export default function initTimeCheck() {
    // Seleciona o elemento HTML com o atributo 'data-semana'
    const operacao = document.querySelector('[data-semana]');

    // Converte os atributos 'data-semana' e 'data-horario' em arrays de números
    const diasSemana = operacao.dataset.semana.split(',').map(Number);
    const horasSemana = operacao.dataset.horario.split(',').map(Number);

    // Cria um objeto de data para a data e hora atual
    const dataAtual = new Date();

    // Extrai o dia da semana e a hora atual do objeto de data
    const diaAtual = dataAtual.getDay();
    const horaAtual = dataAtual.getHours();

    // Verifica se o dia atual está na lista de dias de funcionamento
    const fimDeSemana = diasSemana.indexOf(diaAtual) !== -1;

    // Verifica se a hora atual está dentro do horário de funcionamento
    const OpenHour = horaAtual >= horasSemana[0] && horaAtual < horasSemana[1];

    // Se estiver no dia e horário de funcionamento, adiciona a classe 'aberto' e remove 'fechado'
    // Caso contrário, remove a classe 'aberto' e adiciona 'fechado'
    if (fimDeSemana && OpenHour) {
        operacao.classList.add('aberto');
        operacao.classList.remove('fechado');
    } else {
        operacao.classList.remove('aberto');
        operacao.classList.add('fechado');
    }
}
