function mostrar()
{
   var nombre1;
   var nombre2;
   var peso1;
   var peso2;
   var sumaPesos;
   var promedioPesos;

   nombre1 = prompt("Ingrese su nombre: ");
   peso1 = parseFloat(prompt("Ingrese su peso: "));
   nombre2 = prompt("Ingrese el nombre de su pareja: ");
   peso2 = parseFloat(prompt("Ingrese el peso de su pareja: "));

   sumaPesos = peso1 + peso2;
   promedioPesos = sumaPesos / 2;

   alert("Ustedes se llaman "+nombre1+" y "+nombre2+". Pesan "+peso1+" y "+peso2+" kilos, que sumados son "+sumaPesos+" kilos. El promedio de peso es de "+promedioPesos+" kilos.");

}
