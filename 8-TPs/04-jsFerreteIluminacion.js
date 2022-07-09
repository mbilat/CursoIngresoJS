/*4.	Para el departamento de iluminación
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pagó X de IIBB.”, siendo X el impuesto que se pagó. 
*/
function CalcularPrecio() {
    var precioLamp = 35;
    var cantidadLamp;
    var marca;
    var precioSinD;
    var precioFinal;
    var descuento;
    var impuesto;
    var precioimp;

    cantidadLamp = document.getElementById("txtIdCantidad").value;

    marca = document.getElementById("Marca").value;

    if (cantidadLamp >= 6) {
        precioFinal = (cantidadLamp * precioLamp) / 2;

        document.getElementById("txtIdprecioDescuento").value = precioFinal;
        if (precioFinal > 120) {
            impuesto = precioFinal * 10 / 100;
            alert("Usted pagó " + impuesto + " de IIBB.");

        }
    }
    else if (cantidadLamp == 5) {

        if (document.getElementById("Marca").value == "ArgentinaLuz") {
            precioSinD = cantidadLamp * precioLamp;
            descuento = precioSinD * 40 / 100;
            precioFinal = (cantidadLamp * precioLamp) - descuento;
            document.getElementById("txtIdprecioDescuento").value = precioFinal;
            if (precioFinal > 120) {
                impuesto = precioFinal * 10 / 100;
                alert("Usted pagó " + impuesto + " de IIBB.");
            }
            else {
                descuento = precioSinD = cantidadLamp * 30 / 100;
                precioFinal = (cantidadLamp * precioLamp) - descuento;
                document.getElementById("txtIdprecioDescuento").value = precioFinal;
                if (precioFinal > 120) {
                    impuesto = precioFinal * 10 / 100;
                    alert("Usted pagó " + impuesto + " de IIBB.");
                }
            }
        }
    }
    else if (cantidadLamp == 4) {

        if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
            precioSinD = cantidadLamp * precioLamp;
            descuento = precioSinD * 25 / 100;
            precioFinal = (cantidadLamp * precioLamp) - descuento;
            document.getElementById("txtIdprecioDescuento").value = precioFinal;
            if (precioFinal > 120) {
                impuesto = precioFinal * 10 / 100;
                alert("Usted pagó " + impuesto + " de IIBB.");
            }
        }
        else {
            precioSinD = cantidadLamp * precioLamp;
            descuento = precioSinD * 20 / 100;
            precioFinal = (cantidadLamp * precioLamp) - descuento;
            document.getElementById("txtIdprecioDescuento").value = precioFinal;
            if (precioFinal > 120) {
                impuesto = precioFinal * 10 / 100;
                alert("Usted pagó " + impuesto + " de IIBB.");
            }
        }
    }

    else if (cantidadLamp == 3) {

        if (marca == "ArgentinaLuz") {
            precioSinD = cantidadLamp * precioLamp;
            descuento = precioSinD * 15 / 100;
            precioFinal = (cantidadLamp * precioLamp) - descuento;
            document.getElementById("txtIdprecioDescuento").value = precioFinal;
            if (precioFinal > 120) {
                impuesto = precioFinal * 10 / 100;
                alert("Usted pagó " + impuesto + " de IIBB.");
            }
        }
        else if (marca == "FelipeLamparas") {
            precioSinD = cantidadLamp * precioLamp;
            descuento = precioSinD * 10 / 100;
            precioFinal = (cantidadLamp * precioLamp) - descuento;
            document.getElementById("txtIdprecioDescuento").value = precioFinal;
            if (precioFinal > 120) {
                impuesto = precioFinal * 10 / 100;
                alert("Usted pagó " + impuesto + " de IIBB.");
            }
        }
        else {
            precioSinD = cantidadLamp * precioLamp;
            descuento = precioSinD * 5 / 100;
            precioFinal = (cantidadLamp * precioLamp) - descuento;
            document.getElementById("txtIdprecioDescuento").value = precioFinal;
            if (precioFinal > 120) {
                impuesto = precioFinal * 10 / 100;
                alert("Usted pagó " + impuesto + " de IIBB.");
            }
        }
        if (precioFinal > 120) {
            impuesto = precioFinal * 10 / 100;
            alert("Usted pagó " + impuesto + " de IIBB.");

        }
    }

    else {
        precioFinal = cantidadLamp * precioLamp;
        document.getElementById("txtIdprecioDescuento").value = precioFinal;
    }
}