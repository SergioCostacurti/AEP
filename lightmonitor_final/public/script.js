
document.addEventListener('DOMContentLoaded', () => {
    const showRegisterButton = document.getElementById('show-register');

    showRegisterButton.addEventListener('click', () => {
        window.location.href = 'register.html';
    });

    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        // Simulação de login
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        if (email && password) {
            alert('Logado com sucesso');
            window.location.href = 'home.html';
        } else {
            alert('Por favor, insira o email e a senha');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("adicionarTomadaForm");
    
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Tomada adicionada com sucesso!");
            window.location.href = "home.html";
        });
    }
});

function toggleStatus(button) {
    const status = button.previousElementSibling.querySelector('.q1o2p');
    if (status.classList.contains('on')) {
        status.classList.remove('on');
        status.classList.add('off');
        status.textContent = 'Desligado';
        button.textContent = 'Ligar';
    } else {
        status.classList.remove('off');
        status.classList.add('on');
        status.textContent = 'Ligado';
        button.textContent = 'Desligar';
    }
}
