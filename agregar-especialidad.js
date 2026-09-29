const form = document.getElementById("specialty-form");
const nombreInput = document.getElementById("especialidad");
const descripcionInput = document.getElementById("descripcion");
const estadoSelect = document.getElementById("estado");
const cancelButton = document.getElementById("cancel");
const logoutButton = document.getElementById("logout");
const nombreError = document.getElementById("nombre-error");
const descripcionError = document.getElementById("descripcion-error");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = nombreInput.value.trim();
    const descripcion = descripcionInput.value.trim();
    const estado = estadoSelect.value;

    nombreError.textContent = "";
    descripcionError.textContent = "";

    let esValido = true;

    if (nombre === "") {
        nombreError.textContent = "El nombre es obligatorio.";
        esValido = false;
    } else if (nombre.length > 15) {
        nombreError.textContent = "El nombre no puede superar los 15 caracteres.";
        esValido = false;
    }

    if (descripcion === "") {
        descripcionError.textContent = "La descripción es obligatoria.";
        esValido = false;
    } else if (descripcion.length > 100) {
        descripcionError.textContent = "La descripción no puede superar los 100 caracteres.";
        esValido = false;
    }

    if (!esValido) {
        return;
    }

    const nuevaEspecialidad = {
        id: crypto.randomUUID(),
        nombre: nombre,
        descripcion: descripcion,
        estado: estado
    };

    console.log(nuevaEspecialidad);

    agregarEspecialidad(nuevaEspecialidad);

    window.location.href = "listado-especialidad.html";
});

cancelButton.addEventListener("click", function () {
    window.location.href = "listado-especialidad.html";
});

logoutButton.addEventListener("click", function () {
    window.location.href = "login.html";
});