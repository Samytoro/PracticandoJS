// Definimos una función que toma un número como argumento y devuelve un mensaje indicando si es par o impar
function determinarParImpar(numero) {
    // Verificamos si el resto de dividir el número por 2 es igual a 0
    if (numero % 2 === 0) {
      return `${numero} es un número par.`; // Si es igual a 0, el número es par
    } else {
      return `${numero} es un número impar.`; // Si no es igual a 0, el número es impar
    }
  }
  
  // Probamos la función con algunos ejemplos
  console.log(determinarParImpar(10)); // Output: 10 es un número par.
  console.log(determinarParImpar(17)); // Output: 17 es un número impar.

  
  // Definimos una función que toma un número como argumento y devuelve un mensaje indicando si es par o impar
function determinarParImpar(numero) {
    // Verificamos si el resto de dividir el número por 2 es igual a 0
    if (numero % 2 === 0) {
      return `${numero} es un número par.`; // Si es igual a 0, el número es par
    } else {
      return `${numero} es un número impar.`; // Si no es igual a 0, el número es impar
    }
  }
  
  // Probamos la función con algunos ejemplos
  console.log(determinarParImpar(10)); // Output: 10 es un número par.
  console.log(determinarParImpar(17)); // Output: 17 es un número impar.
  console.log(determinarParImpar(123456789)); // Output: 123456789 es un número impar.
  