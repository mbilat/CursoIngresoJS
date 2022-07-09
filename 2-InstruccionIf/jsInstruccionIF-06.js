function mostrar() {
	var edad;

	edad = document.getElementById("txtIdEdad").value;

	if (parseInt(edad) < 13) {

		alert("Usted es menor de edad.");

	}
	else if (edad < 18) {
		alert("Usted es un adolescente.");
	}
	else {
		alert("Usted es mayor de edad.")
	}

}