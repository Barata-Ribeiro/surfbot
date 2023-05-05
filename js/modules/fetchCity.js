export default class FetchCity {
    constructor(select1, select2) {
        this.estadoSelect = document.getElementById(select1);
        this.cidadeSelect = document.getElementById(select2);

        if (!this.estadoSelect || !this.cidadeSelect) {
            throw new Error('Elementos estado/cidade não encontrados!');
        }
    }

    FetchCityEventListener() {
        this.estadoSelect.addEventListener('change', (event) => {
            const state = event.target.value;
            const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios?orderBy=nome`;

            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    this.cidadeSelect.innerHTML = '<option value="">Selecione a Cidade</option>';
                    data.forEach((cidade) => {
                        const option = document.createElement('option');
                        option.value = cidade.nome;
                        option.text = cidade.nome;
                        this.cidadeSelect.add(option);
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        });
    }

    init() {
        this.FetchCityEventListener();
        return this;
    }
}
