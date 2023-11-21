let intervalos = {};

    function iniciarCronometro(id, tiempo) {
      if (!intervalos[id]) {
        let segundos = tiempo;
        intervalos[id] = setInterval(function() {
          let minutos = Math.floor(segundos / 60);
          let segundosRestantes = segundos % 60;
          document.getElementById(id).innerText = `${minutos < 10 ? '0' : ''}${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;

          if (segundos > 0) {
            segundos--;
          } else {
            clearInterval(intervalos[id]);
            intervalos[id] = null;
            document.getElementById(id).innerText = 'Tiempo Terminado';
          }
        }, 1000);
      }
    }

    function controlarCronometro(id, tiempo) {
      if (!intervalos[id]) {
        iniciarCronometro(id, tiempo);
      } else {
        clearInterval(intervalos[id]);
        intervalos[id] = null;
        document.getElementById(id).innerText = 'En Pausa';
      }
    }

    function reiniciarCronometro(id, tiempo) {
      clearInterval(intervalos[id]);
      intervalos[id] = null;
      document.getElementById(id).innerText = '00:00';
    }