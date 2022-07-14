function mostrar()
{
	var mesDelAnio;
	
	mesDelAnio = document.getElementById("txtIdMes").value;

	switch (mesDelAnio) {
		case "Febrero" :
			alert("Este mes no tiene más de 29 días.");
			break;
	
		default :
			alert("Este mes tiene 30 días o más.");
			break;
	}

}