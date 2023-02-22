function formatCPF() {
    var cpfInput = document.getElementById('cpf');
    var cpfValue = cpfInput.value.replace(/[^\d]/g, '');
    cpfValue = cpfValue.substring(0, 11);
    cpfValue = cpfValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    cpfInput.value = cpfValue;
}
function formatCEP() {
    var cepInput = document.getElementById('cep');
    var cepValue = cepInput.value.replace(/[^\d]/g, '');
    cepValue = cepValue.substring(0, 8);
    cepValue = cepValue.replace(/(\d{2})(\d{3})(\d{3})/, '$1.$2-$3');
    cepInput.value = cepValue;
}
function formatCartaoNumero() {
    var cartaoInput = document.getElementById('numero-cartao');
    var cartaoValue = cartaoInput.value.replace(/[^\d]/g, '');
    cartaoValue = cartaoValue.substring(0, 16);
    cartaoValue = cartaoValue.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/,'$1 $2 $3 $4');
    cartaoInput.value = cartaoValue;
}
