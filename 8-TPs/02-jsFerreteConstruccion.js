/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
    var largo;
    var ancho;
    var cantidad;

    largo = parseFloat(document.getElementById("txtIdLargo").value);

    ancho = parseFloat(document.getElementById("txtIdAncho").value);

    cantidad = ((largo * 2) + (ancho * 2)) * 3;

    alert("La cantidad de alambre a comprar es: " + cantidad + " metros.");

}
function Circulo() {
    var radio;
    var circunferencia;
    var cantidadParaC;
    var pi = Math.PI;

    radio = parseFloat(document.getElementById("txtIdRadio").value);

    circunferencia = 2 * pi * radio;

    cantidadParaC = circunferencia * 3;

    alert("La cantidad de alambre a comprar es: " + cantidadParaC.toFixed(2) + " metros.");


}
function Materiales() {
    var bolsaCemento;
    var bolsaCal;
    var metroCuadrado;
    
    largo = parseInt(document.getElementById("txtIdLargo").value);

    ancho = parseInt(document.getElementById("txtIdAncho").value);

    metroCuadrado = largo * ancho;

    bolsaCal = metroCuadrado * 3;

    bolsaCemento = metroCuadrado * 2;

    alert("Para tu contrapiso se necesitan: "+bolsaCal+" bolsas de cal y "+bolsaCemento+" bolsas de cemento.");

}