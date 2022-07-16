function mostrar() {
	var estacionDelAnio;
	var destino;
	var mensaje;

	estacionDelAnio = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch (estacionDelAnio) {
		case "Invierno":
			{
				if (destino == "Bariloche") {
					mensaje = "Se viaja.";
				}
				else
					mensaje = "No se viaja.";
			}
			break;
		case "Verano":
			{
				if (destino == ("Mar del plata" || "Cataratas")) {
					mensaje = "Se viaja.";
				}
				else
					mensaje = "No se viaja.";
			}
			break;
		case "Otoño":
			mensaje = "Se viaja.";
			break;
		case "Primavera":
			{
				if (destino != "Bariloche") {
					mensaje = "Se viaja.";
				}
				else
					mensaje = "No se viaja.";
			}
			break;

	}
	alert(mensaje);
}