export default class TimeCheck {
    constructor(element, openClass = 'aberto', closedClass = 'fechado') {
        this.operations = element;
        this.openClass = openClass;
        this.closedClass = closedClass;
    }

    init() {
        // Converte os atributos 'data-semana' e 'data-horario' em arrays de números
        const weekdays = this.operations.dataset.semana.split(',').map(Number);
        const hoursOfWeek = this.operations.dataset.horario
            .split(',')
            .map(Number);

        // Cria um objeto de data para a data e hora atual
        const currentDate = new Date();

        // Extrai o dia da semana e hora atual do objeto de data
        const currentDay = currentDate.getDay();
        const currentHour = currentDate.getHours();

        // Verifica se o dia atual está na lista de dias de operação
        const isWeekend = weekdays.indexOf(currentDay) !== -1;

        // Verifica se a hora atual está dentro do horário de operação
        const isOpenHour = currentHour >= hoursOfWeek[0] && currentHour < hoursOfWeek[1];

        // Se estiver durante o dia e horário de operação, adiciona a classe aberto e remove fechado
        // Caso contrário, remove a classe aberto e adiciona fechado
        if (isWeekend && isOpenHour) {
            this.operations.classList.add(this.openClass);
            this.operations.classList.remove(this.closedClass);
        } else {
            this.operations.classList.remove(this.openClass);
            this.operations.classList.add(this.closedClass);
        }
    }
}
