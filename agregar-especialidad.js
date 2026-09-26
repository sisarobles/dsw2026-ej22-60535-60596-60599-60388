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
        id: crypto.randomUUID(),
        nombre: nombre,
        descripcion: descripcion,
        estado: estado
    };

    const datos = localStorage.getItem("specialties");

    let especialidades = [];

    if (datos) {
        especialidades = JSON.parse(datos);
    }

    especialidades.push(nuevaEspecialidad);

    localStorage.setItem(
        "specialties",
        JSON.stringify(especialidades)
    );

    window.location.href = "listado-especialidad.html";
});


cancelButton.addEventListener("click", function () {

    window.location.href = "listado-especialidad.html";

});


logoutButton.addEventListener("click", function () {

    window.location.href = "login.html";

});