// script.js

function forgotPassword() {
    alert("Redirecionando para recuperação de senha...");
}

function createAccount() {
    alert("Redirecionando para a página de criação de conta...");
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário para a página de backend

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        alert(`Login realizado com sucesso!\nUsuário: ${username}`);
    } else {
        alert("Por favor, preencha os campos de login e senha.");
    }
});
