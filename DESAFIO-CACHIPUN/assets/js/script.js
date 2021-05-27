const jugadas = ["Piedra", "Papel", "Tijera"];
      var ptsComputer = 0;
      var ptsPlayer = 0;
      let cantidadDePartida;
      do {
        cantidadDePartida = +prompt(
          "Ingrese el numero de partidas, que debe ser positivo"
        );
      } while (cantidadDePartida <= 0);
      for (var i = 1; i <= cantidadDePartida; i++) {
        let jugadaDelJugador;
        do {
          jugadaDelJugador = +prompt(`

      Ingresar jugada:

        1) Piedra
        2) Papel
        3) Tijera

      Ingrese el NÚMERO de la opción

      `);
        } while (jugadaDelJugador < 1 || jugadaDelJugador > 3);

        //Cantidad de paritdas debe ser positivo.

        var jugadaDelComputador = Math.floor(Math.random() * 3) + 1;
        alert("La computadora eligió: " + jugadas[jugadaDelComputador - 1]);

        var j = jugadaDelJugador;
        var c = jugadaDelComputador;

        if (j == c) alert("EMPATE PO COMPADRE!"), ptsComputer++, ptsPlayer++;
        else if (j == 1 && c == 2) alert("El computador ganó"), ptsComputer++;
        else if (j == 1 && c == 3) alert("El jugador ganó"), ptsPlayer++;
        else if (j == 2 && c == 3) alert("El computador ganó"), ptsComputer++;
        else if (j == 2 && c == 1) alert("El jugador ganó"), ptsPlayer++;
        else if (j == 3 && c == 1) alert("El computador ganó"), ptsComputer++;
        else if (j == 3 && c == 2) alert("El jugador ganó"), ptsPlayer++;
      }

      const decisionFinal = ptsPlayer > ptsComputer ? "Jugador" : "Computadora";
      alert(`
        Puntaje final:
            - Jugador: ${ptsPlayer}
            - Computadora: ${ptsComputer};

        El ganador definitivo fue: ${decisionFinal}
      `);