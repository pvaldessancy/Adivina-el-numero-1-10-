// Generamos el número secreto de forma aleatoria entre 1 y 10
const secreto = Math.floor(Math.random() * 10) + 1;

// Arreglo para guardar los números que el usuario va intentando
let usados = [];

// Cantidad de intentos disponibles
let intentos = 3;

// Función para saber si el número ya fue usado
function yaUsado(numero, lista) {
  return lista.includes(numero);
}

// Mensaje de bienvenida
alert("¡Bienvenido! Tienes 3 intentos para adivinar un número del 1 al 10.");

// Ciclo que se ejecuta mientras queden intentos
while (intentos > 0) {
  // Pedimos un número al usuario
  let entrada = prompt("Ingresa un número entre 1 y 10:");

  // Convertimos el texto ingresado a número entero
  let numero = parseInt(entrada);

  // 1. Verificamos si es un número válido y si está dentro del rango
  if (isNaN(numero) || numero < 1 || numero > 10) {
    alert("Número inválido. Debe ser entre 1 y 10.");
    // 'continue' vuelve al inicio del ciclo sin restar intentos
    continue;
  }

  // 2. Verificamos si el número ya fue usado (no repetidos)
  if (yaUsado(numero, usados)) {
    alert("Ya usaste ese número. Intenta con otro.");
    // Volvemos a pedir sin restar intentos
    continue;
  }

  // Si pasó las validaciones, lo agregamos a la lista de usados
  usados.push(numero);

  // Actualizamos el historial en la página web
  document.getElementById("historial").innerHTML = "Intentos: " + usados.join(", ");

  // 3. Comparamos con el número secreto
  if (numero === secreto) {
    alert("¡Adivinaste! El número secreto era " + secreto);
    // Terminamos el juego rompiendo el ciclo
    break;
  } else {
    // Si falló, restamos un intento
    intentos--;

    if (intentos > 0) {
      alert("Fallaste. Te quedan " + intentos + " intentos.");
    } else {
      // Si intentos llega a 0, perdió
      alert("Perdiste. El número era " + secreto);
    }
  }
}
