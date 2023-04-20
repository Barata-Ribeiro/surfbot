export default function initFetchCity() {
    const estadoSelect = document.getElementById('estado');
    const cidadeSelect = document.getElementById('cidade');

    estadoSelect.addEventListener('change', (event) => {
        const state = event.target.value;
        const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios?orderBy=nome`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                cidadeSelect.innerHTML = '<option value="">Selecione a Cidade</option>';
                data.forEach((cidade) => {
                    const option = document.createElement('option');
                    option.value = cidade.nome;
                    option.text = cidade.nome;
                    cidadeSelect.add(option);
                });
            })
            .catch((error) => {
                console.log(error);
            });
    });
}
