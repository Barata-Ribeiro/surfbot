export function addEmail() {
    const email = document.getElementById('intro_email').value;
    const form = document.getElementById('intro-form');
    form.action = `./matricula.html?email=${encodeURIComponent(email)}`;
}

export default function initEmailHref() {
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('intro_email');
    if (email) {
        const emailInput = document.getElementById('email');
        emailInput.value = email;
    }

    const form = document.getElementById('intro-form');
    if (form) {
        // Verifique se o elemento existe antes de adicionar o event listener
        form.addEventListener('submit', addEmail);
    }
}
