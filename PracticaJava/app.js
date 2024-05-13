document.getElementById('formularioAgregarTarea').addEventListener('submit', function(e) {
	e.preventDefault();
	var nuevaTarea = document.getElementById('nuevaTarea').value;
	if (nuevaTarea === '') {
		return;
	}
	var listaTareas = document.getElementById('listaTareas');
	var li = document.createElement('li');
	li.innerHTML = nuevaTarea;
	var botonEliminar = document.createElement('button');
	botonEliminar.className = 'eliminar';
	botonEliminar.textContent = 'Eliminar';
	li.appendChild(botonEliminar);
	listaTareas.appendChild(li);
	document.getElementById('nuevaTarea').value = '';
	li.addEventListener('click', function() {
		li.classList.toggle('completada');
	});
	botonEliminar.addEventListener('click', function() {
		listaTareas.removeChild(li);
	});
});

document.getElementById('limpiarCompletadas').addEventListener('click', function() {
	var tareasCompletadas = document.getElementsByClassName('completada');
	while (tareasCompletadas.length > 0) {
		tareasCompletadas[0].parentNode.removeChild(tareasCompletadas[0]);
	}
});