function mostrar() {
	var nota;
	var min;
	var max;

	min = 1;
	max = 10;

	nota = Math.round(Math.random() * (max - min) + min);

	if (nota >= 9) {
		alert("Nota: "+nota+" Excelente!");
	}
	else if (nota > 4) {
		alert("Nota: "+nota+" Aprobó!");
	}
	else {
		alert("Nota: "+nota+" Vamos, la próxima se puede!");
	}
}