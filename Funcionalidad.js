let intervalos = {};

function validarTiempo(inputId) {
  let input = document.getElementById(inputId);
  let tiempo = parseInt(input.value);

  if (!isNaN(tiempo) && tiempo > 0) {
    return true;
  } else {
    alert(`No has puesto un tiempo válido. Por favor, ingresa un número válido mayor que cero para poder iniciar el cronómetro.`);
    input.value = "";
    return false;
  }
}

/* La explicacion que le damos: Es una función sencilla  que  utilizamos para 
validar que el valor introducido en un input de tipo time, validamos que sea un número 
válido mayor que cero. */

function iniciarCronometro(cronometroId, mensajeId, inputId) {
  if (validarTiempo(inputId)) {
    let tiempo = parseInt(document.getElementById(inputId).value);
    let segundos = 0;
    document.getElementById(mensajeId).innerText = 'Ejecutándose';
    intervalos[cronometroId] = setInterval(function() {
      let minutos = Math.floor(segundos / 60);
      let segundosRestantes = segundos % 60;
      document.getElementById(cronometroId).innerText = `${minutos < 10 ? '0' : ''}${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;

      if (segundos < tiempo) {
        segundos++;
      } else {
        clearInterval(intervalos[cronometroId]);
        intervalos[cronometroId] = null;
        document.getElementById(mensajeId).innerText = 'En Pausa';
      }
    }, 1000);
  }
}

/* La explicacion de lo que hace la funcion es: 
- Valida que el valor introducido en el input de tipo time sea un número 
válido mayor que cero
- Si el valor es válido, obtiene el tiempo especificado por el usuario
- Inicializa el contador de segundos a 0
- Actualiza el mensaje de estado del cronómetro a "Ejecutándose"
- Inicia un intervalo de 1000 milisegundos (1 segundo) que se ejecutará 
continuamente por el tiempo especificado por el usuario
- Dentro del intervalo, actualiza el texto del elemento cronometroId con el 
tiempo que esta transcurriendo
- Si el tiempo transcurrido es menor que el tiempo especificado por el usuario, 
incrementa el contador de segundos
- Si el tiempo transcurrido es igual o mayor que el tiempo especificado por el 
usuario, detiene el intervalo y actualiza el mensaje de estado del cronómetro 
a "En Pausa" */

function pausarCronometro(cronometroId, mensajeId) {
  clearInterval(intervalos[cronometroId]);
  intervalos[cronometroId] = null;
  document.getElementById(mensajeId).innerText = 'En Pausa';
}

/* Explicacion: La funcion tiene como objetivo pausar un cronómetro. La función 
funciona de la siguiente manera:
- Obtiene el identificador del intervalo del cronómetro que se desea pausar
- Detiene el intervalo del cronómetro
- Establece la propiedad intervalos del cronómetro a null
- Actualiza el mensaje de estado del cronómetro a "En Pausa"
- Si el cronómetro está en ejecución, la función pausarCronometro() lo detendrá 
y actualizará el mensaje de estado a "En Pausa" */

function reiniciarCronometro(cronometroId, mensajeId, inputId) {
  clearInterval(intervalos[cronometroId]);
  intervalos[cronometroId] = null;
  document.getElementById(cronometroId).innerText = '00:00';
  document.getElementById(mensajeId).innerText = 'Iniciado';
  document.getElementById(inputId).value = "";
}
/* Explicacion de lo que hace la funcion:
- Detiene el intervalo del cronómetro
- Establece la propiedad intervalos del cronómetro a null
- Establece el texto del elemento cronometroId a 00:00
- Establece el mensaje de estado del cronómetro a 'Iniciado'
- Establece el valor del input de tipo time */



 function iniciarTodosLosCronometros() {
  if (validarTiempo('inputTiempo1')) {
    iniciarCronometro('cronometro1','mensaje1','inputTiempo1');
    iniciarCronometro('cronometro2','mensaje2','inputTiempo2');
    iniciarCronometro('cronometro3','mensaje3','inputTiempo3');
  }
}

/* No e utiliza. INTENTO FALLIDO. */
/*
function pausarTodosLosCronometros() {
  pausarCronometro('cronometro1','mensaje1');
  pausarCronometro('cronometro2','mensaje2');
  pausarCronometro('cronometro3','mensaje3');
} */