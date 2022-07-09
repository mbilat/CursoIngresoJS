/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var descuento;
	var importefinal;

	importe = parseInt(document.getElementById("txtIdImporte").value);

	descuento = importe * 25 /100;

	importefinal = importe - descuento;

	document.getElementById("txtIdResultado").value = importefinal;
	
}
