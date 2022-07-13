function mostrar()
{
 var precio;
 var porcentajeDescuento;
 var descuento;
 var precioFinal;

 precio = parseInt(prompt("Ingrese el precio: "));
 porcentajeDescuento = parseInt(prompt("Ingrese el porcentaje de descuento: "));

 descuento = precio * porcentajeDescuento / 100;

 precioFinal = precio - descuento;

 document.getElementById("elPrecioFinal").value = precioFinal;
 
}
