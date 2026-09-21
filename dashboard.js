document.addEventListener('DOMContentLoaded', () => {
  const logoutButton = document.getElementById('logout');
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('sidebar');

  logoutButton.addEventListener('click', () => {
    window.location.href = 'login.html';
  });

  menuBtn.addEventListener('click', () =>
{
  nav.classList.toggle('open');
} );

  const doctores = [
  {nombre: "Dr. James Wilson", especialidad: "Cardiología", estado:"Activo"},
  {nombre: "Dr. Elena Rodriguez", especialidad: "Neurología", estado:"Activo"},
  {nombre: "Dr. Robert Chen", especialidad: "Pediatría", estado:"De Licencia"},
  
];
  
const cuerpoTabla = document.getElementById('tablaDoctores');
doctores.forEach(doc => 
{
  const fila = document.createElement('tr');

  const celdaNombre = document.createElement('td');
  celdaNombre.textContent = doc.nombre;

  const celdaEspecialidad = document.createElement('td');
  celdaEspecialidad.textContent = doc.especialidad;

  const celdaEstado = document.createElement('td');
  const estado = document.createElement('span');
  estado.textContent = doc.estado;
  estado.classList.add('estado');

  if (doc.estado === 'Activo') {
    estado.classList.add('activo');
  } else {
    estado.classList.add('licencia');
  }

  celdaEstado.appendChild(estado);

  fila.appendChild(celdaNombre);
  fila.appendChild(celdaEspecialidad);
  fila.appendChild(celdaEstado);

  cuerpoTabla.appendChild(fila);
}
);

  });


