function mostrar()
{
	var edad;
	var estadocivil;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadocivil = document.getElementById("estadoCivil").value;

	if (edad > 17 && estadocivil == "Soltero")

		alert("Es soltero y no es menor.");
	
	
}