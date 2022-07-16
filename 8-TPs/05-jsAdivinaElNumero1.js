/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto;
var contadorIntentos;
var min;
var max;



function comenzar() {

  contadorIntentos = 0
  min = 1;
  max = 100;
  numeroSecreto = Math.round(Math.random() * (max - min) + min);
}

function verificar() {
  var numeroIngresado;

  numeroIngresado = parseInt(document.getElementById("txtIdNumero").value);
  contadorIntentos++;
  console.log(contadorIntentos);

  if (numeroIngresado == numeroSecreto) {
    alert("Usted es el ganador! Y en sólo " + contadorIntentos + " intentos."
    )
  }
  else {
    document.getElementById("txtIdIntentos").value = (contadorIntentos);
    if (numeroIngresado < numeroSecreto) {
      alert("Falta para llegar al número secreto!")
    }
    else {
      alert("Se pasó del número secreto!"
      )
    }
  }
}