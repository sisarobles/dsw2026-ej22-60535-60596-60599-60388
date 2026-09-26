const form = document.getElementById("specialty-form");
const nombreInput = document.getElementById("especialidad");
const descripcionInput = document.getElementById("descripcion");
const estadoSelect = document.getElementById("estado");
const cancelButton = document.getElementById("cancel");
const logoutButton = document.getElementById("logout");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = nombreInput.value;
    const descripcion = descripcionInput.value;
    const estado = estadoSelect.value;

    const nuevaEspecialidad = {
        nombre,
        descripcion,
        estado
    };

    const especialidades = JSON.parse(localStorage.getItem("especialidades")) || [];
    especialidades.push(nuevaEspecialidad);
    localStorage.setItem("especialidades", JSON.stringify(especialidades));
});

cancelButton.addEventListener("click", function () {
    window.location.href = "specialties.html";
});

logoutButton.addEventListener("click", function () {
    window.location.href = "login.html";
});