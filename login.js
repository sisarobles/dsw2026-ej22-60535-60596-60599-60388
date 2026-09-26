document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const togglePassword = document.getElementById('toggle-password');
    const password = document.getElementById('password');

    if (togglePassword) {
        togglePassword.addEventListener('click', function () {
            if (password.type === 'password') {
                password.type = 'text';
            } else {
                password.type = 'password';
            }
        });
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const passwordValue = password.value;
        // Aquí puedes agregar la lógica para validar el usuario y la contraseña
        if (username === 'admin' && passwordValue === 'password') {
            // Redirigir a la página de productos o dashboard
            window.location.href = 'dashboard.html';
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    });
});