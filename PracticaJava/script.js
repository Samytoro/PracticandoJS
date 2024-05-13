let valorEnDisplay = '';

function agregarAlDisplay(valor) {
  valorEnDisplay += valor;
  document.getElementById('display').value = valorEnDisplay;
}

function limpiarDisplay() {
  valorEnDisplay = '';
  document.getElementById('display').value = valorEnDisplay;
}

function operar(operador) {
  if (valorEnDisplay !== '' && !isNaN(valorEnDisplay[valorEnDisplay.length - 1])) {
    valorEnDisplay += operador;
    document.getElementById('display').value = valorEnDisplay;
  }
}

function calcular() {
  if (valorEnDisplay !== '') {
    try {
      const resultado = eval(valorEnDisplay);
      document.getElementById('display').value = resultado;
      valorEnDisplay = resultado.toString();
    } catch (error) {
      alert('Error en la expresión');
      limpiarDisplay();
    }
  }
}
