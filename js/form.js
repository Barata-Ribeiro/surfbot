// inicio do script de pegar email do link e preenche formulario
function addEmail() {
    let email = document.getElementById('intro_email').value;
    let form = document.getElementById('intro-form');
    form.action = './matricula.html?email=' + encodeURIComponent(email);
}

const emailParams = new URLSearchParams(window.location.search);
const email = emailParams.get('intro_email');
if (email) {
    const emailInput = document.getElementById('email');
    emailInput.value = email;
}
// fim do script de pegar email do link e preenche formulario
// formatação do CPF
function formatCPF() {
    const cpfInput = document.getElementById('cpf');
    let cpfValue = cpfInput.value.replace(/[^\d]/g, '');
    cpfValue = cpfValue.substring(0, 11);
    cpfValue = cpfValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    cpfInput.value = cpfValue;
}

// começo do script pegando a cidade baseada na escolha do estado
const estadoSelect = document.getElementById('estado');
const cidadeSelect = document.getElementById('cidade');

estadoSelect.addEventListener('change', (event) => {
    const state = event.target.value;
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios?orderBy=nome`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            cidadeSelect.innerHTML =
                "<option value=''>Selecione a Cidade</option>";
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
// fim do script pegando a cidade baseada na escolha do estado
// formatação do CEP
function formatCEP() {
    const cepInput = document.getElementById('cep');
    let cepValue = cepInput.value.replace(/[^\d]/g, '');
    cepValue = cepValue.substring(0, 8);
    cepValue = cepValue.replace(/(\d{2})(\d{3})(\d{3})/, '$1.$2-$3');
    cepInput.value = cepValue;
}
// formatação do número do Cartão de Crédito
function formatCartaoNumero() {
    const cartaoInput = document.getElementById('numero-cartao');
    let cartaoValue = cartaoInput.value.replace(/[^\d]/g, '');
    cartaoValue = cartaoValue.substring(0, 16);
    cartaoValue = cartaoValue.replace(
        /(\d{4})(\d{4})(\d{4})(\d{4})/,
        '$1 $2 $3 $4'
    );
    cartaoInput.value = cartaoValue;
}

// inicio script para mudar o tipo de opção cartão/boleto
const cartaoLabel = document.querySelector('label[for="cartao"]');
const boletoLabel = document.querySelector('label[for="boleto"]');
const cartaoInput = document.getElementById('cartao');
const boletoInput = document.getElementById('boleto');

function updateSelectedRadio(radioSelected, radioNotSelected) {
    radioSelected.classList.add('ativo');
    radioNotSelected.classList.remove('ativo');
    radioSelected.querySelector('input').checked = true;
    radioNotSelected.querySelector('input').checked = false;
}
cartaoLabel.addEventListener('click', function () {
    updateSelectedRadio(cartaoLabel, boletoLabel);
});
boletoLabel.addEventListener('click', function () {
    updateSelectedRadio(boletoLabel, cartaoLabel);
});

const radioInputs = document.querySelectorAll(
    '.form-pagamento-tipo input[type="radio"]'
);
radioInputs.forEach((input) => {
    input.addEventListener('click', (event) => {
        const targetId = event.target.id;
        const pagamentoConteudo = document.querySelectorAll(
            '.form-pagamento-conteudo'
        );
        pagamentoConteudo.forEach((el) => {
            if (el.id === `form-pagamento-${targetId}`) {
                el.classList.remove('esconder');
            } else {
                el.classList.add('esconder');
            }
        });
    });
});
// fim script para mudar o tipo de opção cartão/boleto
// inicio script para mudar o tipo de opção infantil/adulto/profissional
const radioLabels = document.querySelectorAll('.form-plano-tipo label');
const cartoesPlano = document.querySelectorAll('.aulas-tipo-planos div');
const precoSpan = document.querySelector('[data-valor]');

function updateSelectedPlanRadio(selectedLabel) {
    if (
        !selectedLabel ||
        !selectedLabel.classList ||
        !selectedLabel.querySelector
    ) {
        return;
    }

    radioLabels.forEach((label) => {
        label.classList.remove('ativo');
        const input = label.querySelector('input');
        if (input) {
            input.checked = false;
        }
    });

    selectedLabel.classList.add('ativo');
    const selectedInput = selectedLabel.querySelector('input');
    if (selectedInput) {
        selectedInput.checked = true;
    }

    cartoesPlano.forEach((div) => {
        if (div.dataset.plano === selectedInput.id) {
            div.classList.remove('esconder');
            precoSpan.dataset.valor = div
                .querySelector('.font-2-s-b.cor-p2')
                .textContent.replace('R$', '')
                .trim();
            updatePrice();
        } else {
            div.classList.add('esconder');
        }
    });
}

function updatePrice() {
    precoSpan.textContent = `R$ ${precoSpan.dataset.valor}`;
}

radioLabels.forEach((label) => {
    label.addEventListener('click', () => {
        updateSelectedPlanRadio(label);
    });
});

const urlParams = new URLSearchParams(window.location.search);
const produto = urlParams.get('produto');

if (produto === 'infantil') {
    updateSelectedPlanRadio(document.querySelector('label[for="infantil"]'));
} else if (produto === 'adulto') {
    updateSelectedPlanRadio(document.querySelector('label[for="adulto"]'));
} else if (produto === 'profissional') {
    updateSelectedPlanRadio(
        document.querySelector('label[for="profissional"]')
    );
}
// inicio script para mudar o tipo de opção infantil/adulto/profissional
