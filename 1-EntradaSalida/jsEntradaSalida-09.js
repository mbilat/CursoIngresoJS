/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var aum;
	var sueldoaum;

	sueldo = parseInt(document.getElementById("txtIdSueldo").value);

	aum = sueldo * 10 / 100;

	sueldoaum = sueldo + aum;
	
	document.getElementById("txtIdResultado").value = sueldoaum;

}
