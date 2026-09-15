document.addEventListener('DOMContentLoaded', () => {
  const logoutButton = document.getElementById('logout');
  const menuButton = document.getElementById('menu');
  const nav = document.getElementById('sidebar');

  logoutButton.addEventListener('click', () => {
    window.location.href = 'login.html';
  });
  
  menuButton.addEventListener('click', () => {
    nav.classList.toggle('open'); 
  });

});