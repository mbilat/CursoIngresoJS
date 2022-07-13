function mostrar() {
    var num1;
    var num2;
    var resultado;

    num1 = parseInt(prompt("Ingrese un número: "));
    num2 = parseInt(prompt("Ingrese otro número: "));

    if (num1 == num2) {
        resultado = num1 * num2
    }

    else if (num1 >= num2) {
        resultado = num1 - num2
    }
    else { resultado = num1 % num2 }

    alert("El resultado es: " + resultado);
    if (resultado > 3)
{
    alert("El resto es mayor a 3.");
}

}
