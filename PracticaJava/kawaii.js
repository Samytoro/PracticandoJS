document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario
  
    // Obtener los valores del formulario
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
  
    // Validar el nombre
    const nombreError = document.getElementById("nombreError");
    if (nombre === "") {
      nombreError.textContent = "Por favor ingresa tu nombre.";
      return;
    } else {
      nombreError.textContent = "";
    }
  
    // Validar el correo electrónico
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      emailError.textContent = "Por favor ingresa un correo electrónico válido.";
      return;
    } else {
      emailError.textContent = "";
    }
  
    // Validar el mensaje
    const mensajeError = document.getElementById("mensajeError");
    if (mensaje === "") {
      mensajeError.textContent = "Por favor ingresa tu mensaje.";
      return;
    } else {
      mensajeError.textContent = "";
    }
  
    // Aquí puedes agregar la lógica para enviar el formulario a través de Ajax, si es necesario
    // Por ahora, simplemente mostraremos un mensaje de éxito
    alert("¡Mensaje enviado con éxito!");
  });
  