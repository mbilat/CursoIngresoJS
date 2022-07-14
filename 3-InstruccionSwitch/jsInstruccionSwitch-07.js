function mostrar() {
	var destinoIngresado;

	destinoIngresado = document.getElementById("txtIdDestino.value").value;

	switch (destinoIngresado) {
		case "Bariloche":
			alert("El destino se encuentra al Oeste de nuestro país.")
			break;
		case "Cataratas":
			alert("El destino se encuentra al Norte de nuestro país.")
			break;
		case "Mar del plata":
			alert("El destino se encuentra al Este de nuestro país.")
			break;
		case "Ushuaia":
			alert("El destino se encuentra al Sur de nuestro país.")
			break;
	}
}