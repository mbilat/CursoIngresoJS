/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    var precioLamp = 35;
    var cantidadLamp;
    var marca;
    var preciosind;
    var preciofinal;
    var descuento;
    var impuesto;

    cantidadLamp = document.getElementById("txtIdCantidad").value;

    marca = document.getElementById("Marca").value;

    /*if (cantidadLamp >= 6) {
        preciofinal = (cantidadLamp * precioLamp) / 2;
    }

    else if (cantidadLamp == 5) {

        if (marca == "ArgentinaLuz")
            descuento = preciosind * 40 / 100;
        }
        else {
            descuento = preciosind = cantidadLamp * 30 / 100;
        }
    }
    else if (cantidadLamp == 4) {

        if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
            descuento = preciosind * 25 / 100;
        }
        else
            descuento = preciosind * 20 / 100;
        }
    }
    else if (cantidadLamp == 3) {

        if (marca == "ArgentinaLuz")
            descuento = preciosind * 15 / 100;
        }

        else if (marca == "FelipeLamparas")
            descuento = preciosind * 10 / 100;
        }
        else
            descuento = preciosind * 5 / 100;
        }
    }
    else {
        descuento = 0;
    }
    preciofinal = (cantidadLamp * precioLamp) - descuento;

    document.getElementById("txtIdprecioDescuento").value = preciofinal;

    if (preciofinal > 120) {
        impuesto = preciofinal * 10 / 100;
        alert("IIBB Usted pagó: " + impuesto + " .");
    }*/

    if (cantidadLamp >= 6) {
        descuento = (cantidadLamp * precioLamp) / 2
    }
    else {
        switch (cantidadLamp) {
            case 5:
                if (marca == "ArgentinaLuz") {
                    descuento = preciosind * 40 / 100;
                }
                else {
                    descuento = preciosind = cantidadLamp * 30 / 100;
                }
            case 4:
                if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
                    descuento = preciosind * 25 / 100;
                }
                else {
                    descuento = preciosind * 20 / 100;
                }
            case 3:
                if (marca == "ArgentinaLuz") {
                    descuento = preciosind * 15 / 100;
                }

                else if (marca == "FelipeLamparas") {
                    descuento = preciosind * 10 / 100;
                }
                else {
                    descuento = preciosind * 5 / 100;
                }

            default:
                preciofinal = cantidadLamp * precioLamp;
                descuento = 0;
                break;
        }
    }
    preciofinal = (cantidadLamp * precioLamp) - descuento;

    document.getElementById("txtIdprecioDescuento").value = preciofinal;

    if (preciofinal > 120) {
        impuesto = preciofinal * 10 / 100;
        alert("Usted pagó: " + impuesto + " de IIBB.");
    }
}