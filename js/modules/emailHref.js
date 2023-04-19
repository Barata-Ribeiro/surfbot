export default function initEmailHref() {
    function addEmail() {
        let email = document.getElementById('intro_email').value;
        let form = document.getElementById('intro-form');
        form.action = './matricula.html?email=' + encodeURIComponent(email);
    }

    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('intro_email');
    if (email) {
        const emailInput = document.getElementById('email');
        emailInput.value = email;
    }
}
