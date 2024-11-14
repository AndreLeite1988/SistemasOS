// script.js

function registerClient() {
    const name = document.getElementById('name').value;
    const cpf = document.getElementById('cpf').value;
    const contact = document.getElementById('contact').value;
    const email = document.getElementById('email').value;
    const street = document.getElementById('street').value;
    const number = document.getElementById('number').value;
    const neighborhood = document.getElementById('neighborhood').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;

    if (name && cpf && contact && email && street && number && neighborhood && city && state && zip) {
        alert(`Cliente cadastrado com sucesso!\nNome: ${name}`);
        
        // Limpar os campos do formulário após o cadastro
        document.getElementById('clientForm').reset();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}
