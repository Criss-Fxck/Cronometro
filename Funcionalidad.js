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

function pausarCronometro(cronometroId, mensajeId) {
  clearInterval(intervalos[cronometroId]);
  intervalos[cronometroId] = null;
  document.getElementById(mensajeId).innerText = 'En Pausa';
}

function reiniciarCronometro(cronometroId, mensajeId, inputId) {
  clearInterval(intervalos[cronometroId]);
  intervalos[cronometroId] = null;
  document.getElementById(cronometroId).innerText = '00:00';
  document.getElementById(mensajeId).innerText = 'Iniciado';
  document.getElementById(inputId).value = "";
}


/* No e utiliza. INTENTO FALLIDO. */
/* function iniciarTodosLosCronometros() {
  if (validarTiempo('inputTiempo1')) {
    iniciarCronometro('cronometro1','mensaje1','inputTiempo1');
    iniciarCronometro('cronometro2','mensaje2','inputTiempo2');
    iniciarCronometro('cronometro3','mensaje3','inputTiempo3');
  }
}

function pausarTodosLosCronometros() {
  pausarCronometro('cronometro1','mensaje1');
  pausarCronometro('cronometro2','mensaje2');
  pausarCronometro('cronometro3','mensaje3');
} */