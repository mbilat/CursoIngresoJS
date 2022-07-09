function mostrar()
{

	edad = document.getElementById("txtIdEdad").value;

	if (!(parseInt(edad) >= 13 && edad <= 17) )
	
	{alert("Usted no es un adolescente.");}


}