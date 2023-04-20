export default function initPaymentType() {
    // Selecionado os 'labels'e 'radio inputs' para opções de pagamento com cartão e boleto
    const cartaoLabel = document.querySelector('label[for="cartao"]');
    const boletoLabel = document.querySelector('label[for="boleto"]');

    // Função que atualiza a opção de pagamento selecionada
    function updateSelectedRadio(radioSelected, radioNotSelected) {
        radioSelected.classList.add('ativo');
        radioNotSelected.classList.remove('ativo');
        radioSelected.querySelector('input').checked = true;
        radioNotSelected.querySelector('input').checked = false;
    }
    // Event listener para cara radio input, do cartão e do boleto
    cartaoLabel.addEventListener('click', () => updateSelectedRadio(cartaoLabel, boletoLabel));

    boletoLabel.addEventListener('click', () => updateSelectedRadio(boletoLabel, cartaoLabel));

    // Seleciona todos os radio inputs
    const radioInputs = document.querySelectorAll('.form-pagamento-tipo input[type="radio"]');
    // Para cada radio input adicionar um evento de click
    radioInputs.forEach((input) => {
        input.addEventListener('click', (event) => {
            const targetId = event.target.id;
            // Seleciona todos os elements com a classe 'form-pagamento-conteudo'
            const pagamentoConteudo = document.querySelectorAll('.form-pagamento-conteudo');
            // Para cada element, adicionar ou remover a classe 'esconder' conforme clica
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
