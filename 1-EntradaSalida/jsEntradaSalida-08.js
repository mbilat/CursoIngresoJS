/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var divisor;
	var dividendo;
	var resto;

	dividendo = document.getElementById("txtIdNumeroDividendo").value;

	divisor = document.getElementById("txtIdNumeroDivisor").value;

	resto = parseInt(dividendo) % parseInt(divisor);

	alert("El resto de la división es: "+resto);
}
