document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;

        if (!name || !email || !password) {
            showMessage('Todos los campos son obligatorios.', 'error');
            return;
        }

        if (password.length < 8) {
            showMessage('La contraseña debe tener al menos 8 caracteres.', 'error');
            return;
        }

        showMessage('Usuario registrado exitosamente.', 'success');
        console.log('Usuario registrado:', { name, email, password });

        form.reset();
    });

    function showMessage(message, type) {
        messageDiv.textContent = message;
        messageDiv.className = `message ${type}`;
    }
});