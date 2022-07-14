function mostrar() {
	var estacionDelAnio;
	var localidad;
	var porcentaje;
	var TARIFA = 15000;
	var precioFinal;

	estacionDelAnio = document.getElementById("txtIdEstacion").value;
	localidad = document.getElementById("txtIdDestino").value;

	switch (estacionDelAnio) {
		case "Invierno":
			if (localidad == "Bariloche") {
				porcentaje = TARIFA * 20 / 100;
				precioFinal = TARIFA + porcentaje;
			}
			else if (localidad == "Mar del plata") {
				porcentaje = TARIFA * 20 / 100;
				precioFinal = TARIFA - porcentaje;
			}
			else {
				porcentaje = TARIFA * 10 / 100;
				precioFinal = TARIFA - porcentaje;
			}
			break;
		case "Verano":
			if (localidad == "Bariloche") {
				porcentaje = TARIFA * 20 / 100;
				precioFinal = TARIFA - porcentaje;
			}
			else if (localidad == "Cordoba") {
				porcentaje = TARIFA * 10 / 100;
				precioFinal = TARIFA + porcentaje;
			}
			else {
				porcentaje = TARIFA * 20 / 100;
				precioFinal = TARIFA + porcentaje;
			}
			break;
		case "Otoño":
		case "Primavera":
			if (localidad == "Cordoba") {
				precioFinal = TARIFA;
			}
			else {
				porcentaje = TARIFA * 10 / 100;
				precioFinal = TARIFA + porcentaje;
			}
			break;
	}

	alert("La TARIFA  final es: " + precioFinal);
}