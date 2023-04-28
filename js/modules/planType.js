export default function initPlanType() {
    const radioLabels = document.querySelectorAll('.form-plano-tipo label');
    const cartoesPlano = document.querySelectorAll('.aulas-tipo-planos div');
    const precoSpan = document.querySelector('[data-valor]');

    function updateSelectedPlanRadio(selectedLabel) {
        if (!selectedLabel || !selectedLabel.classList || !selectedLabel.querySelector) {
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

        function updatePrice() {
            precoSpan.textContent = `R$ ${precoSpan.dataset.valor}`;
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
        updateSelectedPlanRadio(document.querySelector('label[for="profissional"]'));
    }
}
