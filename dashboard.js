document.addEventListener('DOMContentLoaded', () => {
  const logoutButton = document.getElementById('logout');
  const opciones = document.querySelectorAll('.sidebar nav ul li');

  logoutButton.addEventListener('click', () => {
    window.location.href = 'login.html';
  });

  opciones.forEach((opcion) => {
    opcion.addEventListener('click', (event) => {
      opciones.forEach((item) => item.classList.remove('active'));
      opcion.classList.add('active');
    });
  });
});

const specialtyButton = document.getElementById("shapes");

if (specialtyButton) {
    specialtyButton.addEventListener("click", function () {
        window.location.href = "agregar-especialidad.html";
    });
}