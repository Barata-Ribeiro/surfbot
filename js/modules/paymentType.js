export default function initPaymentType() {
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
}
