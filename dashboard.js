const menuButton = document.getElementById("menu");
const sidebar = document.getElementById("sidebar");
const logoutButton = document.getElementById("logout");

menuButton.addEventListener("click", () => {
    if (window.innerWidth < 600) {
        sidebar.classList.toggle("open");
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth >= 600) {
        sidebar.classList.remove("open");
    }
});

logoutButton.addEventListener("click", () => {
    window.location.href = "login.html";
});