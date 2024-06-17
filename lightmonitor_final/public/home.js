
document.addEventListener('DOMContentLoaded', () => {
    // Alternar status das tomadas
    document.querySelectorAll('.toggle-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const statusElement = e.target.previousElementSibling.querySelector('.status');
            if (statusElement.textContent.includes('Ligado')) {
                statusElement.textContent = 'Desligado';
                statusElement.classList.remove('on');
                statusElement.classList.add('off');
                e.target.textContent = 'Ligar';
            } else {
                statusElement.textContent = 'Ligado';
                statusElement.classList.remove('off');
                statusElement.classList.add('on');
                e.target.textContent = 'Desligar';
            }
        });
    });

    // Ligar todas as tomadas
    document.getElementById('turn-on-all').addEventListener('click', () => {
        document.querySelectorAll('.device-card').forEach(card => {
            const statusElement = card.querySelector('.status');
            statusElement.textContent = 'Ligado';
            statusElement.classList.remove('off');
            statusElement.classList.add('on');
            card.querySelector('.toggle-btn').textContent = 'Desligar';
        });
    });

    // Desligar todas as tomadas
    document.getElementById('turn-off-all').addEventListener('click', () => {
        document.querySelectorAll('.device-card').forEach(card => {
            const statusElement = card.querySelector('.status');
            statusElement.textContent = 'Desligado';
            statusElement.classList.remove('on');
            statusElement.classList.add('off');
            card.querySelector('.toggle-btn').textContent = 'Ligar';
        });
    });

    // Adicionar nova tomada
    document.getElementById('add-new-outlet').addEventListener('click', () => {
        window.location.href = 'add-outlet.html';
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

