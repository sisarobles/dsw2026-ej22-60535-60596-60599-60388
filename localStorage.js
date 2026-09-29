const STORAGE_KEY = "specialties";

function obtenerEspecialidades() {
    const datos = localStorage.getItem(STORAGE_KEY);

    if (!datos) {
        return [];
    }

    return JSON.parse(datos);
}

function guardarEspecialidades(especialidades) {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(especialidades)
    );
}

function agregarEspecialidad(especialidad) {
    const especialidades = obtenerEspecialidades();

    especialidades.push(especialidad);

    guardarEspecialidades(especialidades);
}