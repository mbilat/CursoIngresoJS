function mostrar() {
	var numero
	var min
	var max

	min = 1;
	max = 10;



	numero = Math.round(Math.random() * (max - min) + min);

	alert("Su número es: " + numero);
}