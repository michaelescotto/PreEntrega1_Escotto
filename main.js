let bienvenido = alert("¡Bienvenido a la tienda!\n\nHaga click en el botón Aceptar o presione Enter para continuar.");

let menuPrincipal;

while (true) {
    menuPrincipal = parseInt(prompt("En nuestra tienda tenemos los siguientes artículos a la venta:\n\n1 - Remeras\n2 - Pantalones\n\n0 - Salir\n\nElija el número de la opción para continuar."));
    if (menuPrincipal == 0){
        break;
    }
    switch (menuPrincipal) {
        case 1:
            let menuRemeras = parseInt(prompt("Has seleccionado el menú de Remeras:\n\n1 - Manga corta\n2 - Manga Larga\n\n0 - Volver al menú anterior."));
            switch (menuRemeras) {
                case 1:
                    let menuCarrito = prompt("Desea agregar al carrito:\n\n   Remera - Manga corta.\n\nTotal $2.500\n\nPara pagar escriba PAGAR o SALIR para cancelar.");
                    switch (menuCarrito){
                        case "PAGAR":
                            let menuPago = alert("¡Gracias por su compra!\n\nSera redirigido a la pagina del banco en unos segundos...\n\n");
                            let facturaCompra = console.log("Factura de compra:\n\nRemera - Manga corta.\nTotal $2.500.\n\n¡Gracias por su compra!");
                            break;
                        case "SALIR":
                            let menuSalida = alert("Ha cancelado su compra.\n\n¡Gracias por visitarnos!\n\n");
                            break;
                        default:
                            alert("Opción no válida en el menú de Carrito.");
                            break;
                    }
                    break;
                default:
                    alert("Opción no válida en el menú de Remeras.");
                    break;
            }
            break;
        default:
            let opcionNoValida = alert("Esa opción no es válida, por favor ingresa el número de las opciones indicadas.");
            break;
    }
}

