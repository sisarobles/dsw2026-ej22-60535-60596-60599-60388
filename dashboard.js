document.addEventListener('DOMContentLoaded', () => {

    const logoutButton = document.getElementById('logout');
    const menuButton = document.querySelector('.menu');
    const sidebar = document.getElementById('sidebar');

    logoutButton.addEventListener('click', () => {

        window.location.href = 'login.html';

    });


    menuButton.addEventListener('click', () => {

        sidebar.classList.toggle('open');

    });

});