// Generar un número aleatorio entre 1 y 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
console.log(numeroAleatorio);

// Función para verificar si la conjetura del usuario es correcta
function verificarNumero() {
  // Obtener el valor ingresado por el usuario
  const numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);
  
  // Comparar el número del usuario con el número aleatorio
  if (numeroUsuario === numeroAleatorio) {
    mostrarMensaje("¡Felicidades! ¡Has adivinado el número!");
  } else if (numeroUsuario < numeroAleatorio) {
    mostrarMensaje("Demasiado bajo. Intenta con un número más alto.");
  } else {
    mostrarMensaje("Demasiado alto. Intenta con un número más bajo.");
  }
}

// Función para mostrar mensajes en el HTML
function mostrarMensaje(mensaje) {
  document.getElementById('mensaje').textContent = mensaje;
}
