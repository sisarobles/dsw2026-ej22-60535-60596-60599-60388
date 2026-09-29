const specialties = [];

let listaActual = [];

let paginaActual = 1;

const especialidadesPorPagina = 5;


function cargarEspecialidades() {

    const specialtiesGuardadas = obtenerEspecialidades();

    specialtiesGuardadas.forEach(function (specialty) {

        specialties.push(specialty);

    });

    listaActual = specialties;

    mostrarEspecialidades(listaActual);
}


function obtenerIcono(nombre) {

    if (nombre == "Cardiología") {
        return "heart-pulse";
    }

    if (nombre == "Neurología") {
        return "brain";
    }

    if (nombre == "Dermatología") {
        return "hand";
    }

    if (nombre == "Pediatría") {
        return "baby";
    }

    return "shapes";
}


function mostrarEspecialidades(lista) {

    const tabla = document.querySelector("#especialidad-list");

    tabla.textContent = "";

    const inicio =
        (paginaActual - 1) * especialidadesPorPagina;

    const fin =
        inicio + especialidadesPorPagina;


    lista.forEach(function (specialty, indice) {

        if (indice >= inicio && indice < fin) {

            const fila = document.createElement("tr");


            // NOMBRE

            const celdaNombre =
                document.createElement("td");

            const informacionEspecialidad =
                document.createElement("div");

            informacionEspecialidad.className =
                "speciality-info";

            const icono =
                document.createElement("i");

            icono.setAttribute(
                "data-lucide",
                obtenerIcono(specialty.nombre)
            );

            const nombre =
                document.createElement("span");

            nombre.textContent =
                specialty.nombre;

            informacionEspecialidad.appendChild(icono);

            informacionEspecialidad.appendChild(nombre);

            celdaNombre.appendChild(
                informacionEspecialidad
            );


            // DESCRIPCIÓN

            const descripcion =
                document.createElement("td");

            descripcion.textContent =
                specialty.descripcion;


            // ESTADO

            const celdaEstado =
                document.createElement("td");

            const estado =
                document.createElement("span");


            if (specialty.estado == "activo") {

                estado.className =
                    "status active";

                estado.textContent =
                    "Activo";

            } else {

                estado.className =
                    "status on-leave";

                estado.textContent =
                    "Inactivo";
            }


            celdaEstado.appendChild(estado);


            // ACCIONES

            const acciones =
                document.createElement("td");


            // ARMAR FILA

            fila.appendChild(celdaNombre);

            fila.appendChild(descripcion);

            fila.appendChild(celdaEstado);

            fila.appendChild(acciones);

            tabla.appendChild(fila);
        }

    });


    mostrarInformacionPaginacion(lista);

    mostrarPaginacion(lista);

    lucide.createIcons();
}


function mostrarInformacionPaginacion(lista) {

    const informacion =
        document.querySelector("#pagination-info");

    const total =
        lista.length;


    if (total === 0) {

        informacion.textContent =
            "Mostrando 0-0 de 0 especialidades";

        return;
    }


    const inicio =
        (paginaActual - 1) *
        especialidadesPorPagina + 1;


    let fin =
        paginaActual *
        especialidadesPorPagina;


    if (fin > total) {

        fin = total;
    }


    informacion.textContent =
        "Mostrando " +
        inicio +
        "-" +
        fin +
        " de " +
        total +
        " especialidades";
}


function mostrarPaginacion(lista) {

    const paginacion =
        document.querySelector("#paginacion");

    paginacion.textContent = "";


    const cantidadPaginas =
        Math.ceil(
            lista.length /
            especialidadesPorPagina
        );


    if (cantidadPaginas <= 1) {

        return;
    }


    // ANTERIOR

    const botonAnterior =
        document.createElement("button");

    botonAnterior.type = "button";


    const iconoAnterior =
        document.createElement("i");

    iconoAnterior.setAttribute(
        "data-lucide",
        "chevron-left"
    );

    botonAnterior.appendChild(
        iconoAnterior
    );


    if (paginaActual > 1) {

        botonAnterior.addEventListener(
            "click",
            function () {

                paginaActual--;

                mostrarEspecialidades(lista);

            }
        );

    } else {

        botonAnterior.disabled = true;
    }


    paginacion.appendChild(
        botonAnterior
    );


    // SIGUIENTE

    const botonSiguiente =
        document.createElement("button");

    botonSiguiente.type = "button";


    const iconoSiguiente =
        document.createElement("i");

    iconoSiguiente.setAttribute(
        "data-lucide",
        "chevron-right"
    );

    botonSiguiente.appendChild(
        iconoSiguiente
    );


    if (paginaActual < cantidadPaginas) {

        botonSiguiente.addEventListener(
            "click",
            function () {

                paginaActual++;

                mostrarEspecialidades(lista);

            }
        );

    } else {

        botonSiguiente.disabled = true;
    }


    paginacion.appendChild(
        botonSiguiente
    );


    lucide.createIcons();
}


function filtrarEspecialidades() {

       const buscador =
        document.querySelector("#search-speciality");

    const texto =
        buscador.value;


    const specialtiesGuardadas =
        obtenerEspecialidades();


    const specialtiesFiltradas =
        specialtiesGuardadas.filter(
            function (specialty) {

                return specialty.nombre
                    .toLowerCase()
                    .includes(
                        texto.toLowerCase()
                    );

            }
        );


    listaActual =
        specialtiesFiltradas;

    paginaActual = 1;

    mostrarEspecialidades(
        listaActual
    );
}


document.addEventListener(
    "DOMContentLoaded",
    function () {

        cargarEspecialidades();


        const buscador =
            document.querySelector(
                "#search-speciality"
            );


        buscador.addEventListener(
            "input",
            filtrarEspecialidades
        );


        const botonNuevaEspecialidad =
            document.querySelector("#plus");


        botonNuevaEspecialidad.addEventListener(
            "click",
            function () {

                window.location.href =
                    "agregar-especialidad.html";

            }
        );

    }
);