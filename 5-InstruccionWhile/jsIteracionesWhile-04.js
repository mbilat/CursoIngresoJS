/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	do{
	numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 10."));
	}
	while (!((numeroIngresado >= 0) && (numeroIngresado <= 9)));

	document.getElementById("txtIdNumero").value = numeroIngresado
}