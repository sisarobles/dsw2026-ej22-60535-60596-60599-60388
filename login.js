const formulario =
    document.getElementById("login-form");

const inputUsuario =
    document.getElementById("usuario");

const inputPassword =
    document.getElementById("contraseña");

formulario.addEventListener("submit", (event) => {

    event.preventDefault();
    console.log("Submit ejecutado");

    const usuario =
        inputUsuario.value;
    const password =
        inputPassword.value;

    if (
        usuario === "admin" &&
        password === "password"
    ) {
        window.location.href =
            "dashboard.html";
    } else {
        alert(
            "Usuario o contraseña incorrectos"
        );
    }
});