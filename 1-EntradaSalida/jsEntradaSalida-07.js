/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var num1;
	var num2;
	var resultado;
	
	num1 = document.getElementById("txtIdNumeroUno").value;
	
	num2 = document.getElementById("txtIdNumeroDos").value;

	resultado = parseInt(num1) + parseInt(num2);

	alert("La solución de la suma es: "+resultado);	
}

function restar()
{
	var num1;
	var num2;
	var resultado;
	
	num1 = document.getElementById("txtIdNumeroUno").value;
	
	num2 = document.getElementById("txtIdNumeroDos").value;

	resultado = parseInt(num1) - parseInt(num2);

	alert("La solución de la resta es: "+resultado);
}

function multiplicar()
{ 
	var num1;
	var num2;
	var resultado;
	
	num1 = document.getElementById("txtIdNumeroUno").value;
	
	num2 = document.getElementById("txtIdNumeroDos").value;

	resultado = parseInt(num1) * parseInt(num2);

	alert("La solución de la multiplicación es: "+resultado);
}

function dividir()
{
	var num1;
	var num2;
	var resultado;
	
	num1 = document.getElementById("txtIdNumeroUno").value;
	
	num2 = document.getElementById("txtIdNumeroDos").value;

	resultado = parseFloat(num1) / parseFloat(num2);

	alert("La solución de la división es: "+resultado);
}

