/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {
    var precio1;
    var precio2;
    var precio3;
    var resultado;

    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);

    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);

    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    resultado = precio1 + precio2 + precio3;

    alert("El resultado de la suma es: " + resultado);

}
function Promedio() {
    var promedio;

    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);

    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);

    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    resultado = precio1 + precio2 + precio3;

    promedio = resultado / 3;

    alert("El promedio es: " + promedio);
}
function PrecioFinal() {
    var IVA;
    var preciofinal;

    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);

    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);

    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    resultado = precio1 + precio2 + precio3;

    IVA = resultado * 21 / 100;

    preciofinal = parseInt(resultado) + IVA;

    alert("El precio final es: " + preciofinal);

}