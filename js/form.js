function formatCPF() {
    const cpfInput = document.getElementById('cpf');
    const cpfValue = cpfInput.value.replace(/[^\d]/g, '');
    cpfValue = cpfValue.substring(0, 11);
    cpfValue = cpfValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    cpfInput.value = cpfValue;
}
function formatCEP() {
    const cepInput = document.getElementById('cep');
    const cepValue = cepInput.value.replace(/[^\d]/g, '');
    cepValue = cepValue.substring(0, 8);
    cepValue = cepValue.replace(/(\d{2})(\d{3})(\d{3})/, '$1.$2-$3');
    cepInput.value = cepValue;
}
function formatCartaoNumero() {
    const cartaoInput = document.getElementById('numero-cartao');
    const cartaoValue = cartaoInput.value.replace(/[^\d]/g, '');
    cartaoValue = cartaoValue.substring(0, 16);
    cartaoValue = cartaoValue.replace(
        /(\d{4})(\d{4})(\d{4})(\d{4})/,
        '$1 $2 $3 $4'
    );
    cartaoInput.value = cartaoValue;
}

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
        const pagamentoConteudo = document.querySelectorAll('.form-pagamento-conteudo');
        pagamentoConteudo.forEach((el) => {
            if (el.id === `form-pagamento-${targetId}`) {
                el.classList.remove('esconder');
            } else {
                el.classList.add('esconder');
            }
        });
    });
});
