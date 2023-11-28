const mensajeBienvenida = () => {
    alert("¡Bienvenido a la tienda!\n\nHaga click en el botón Aceptar o presione Enter para continuar.");
}
const mostrarMenuPrincipal = () => {
    return parseInt(prompt("En nuestra tienda tenemos los siguientes artículos a la venta:\n\n1 - Remeras\n2 - Pantalones\n3 - Calzado\n\n0 - Salir\n\nElija el número de la opción para continuar."));
}
const mostrarSubMenu = (menu, item1, item2) => {
    return parseInt(prompt(`Has seleccionado el menú de ${menu}:\n\n1 - ${item1}\n2 - ${item2}\n\n0 - Volver al menú anterior.`));
}
const mostrarMenuCarrito = (articulo, precio) => {
    return prompt(`Desea agregar al carrito:\n\n${articulo}\n\nTotal $${precio}\n\nPara pagar escriba PAGAR o SALIR para cancelar.`);
}
const mensajePago = () => {
    alert("¡Gracias por su compra!\n\nSera redirigido a la pagina del banco en unos segundos...\n\n");
}
const mensajeCancelacion = () => {
    alert("Ha cancelado su compra.\n\n¡Gracias por visitarnos!\n\n");
}
const avisoNoValido = () => {
    alert("Esa opción no es válida, por favor ingresa el número de las opciones indicadas.");
}

const programa = () => {
    mensajeBienvenida();
    while (true) {
        let menuPrincipal = mostrarMenuPrincipal();
        if (menuPrincipal == 0){
         break;
        }
        switch (menuPrincipal){
            case 1: {
                let subMenu = mostrarSubMenu("Remeras", "Manga corta", "Manga Larga");
                    switch(subMenu){
                        case 1:{
                            let menuCarrito = mostrarMenuCarrito("Manga corta", "2.500");
                            switch (menuCarrito){
                                case "PAGAR":{
                                    mensajePago();
                                }
                                menuPrincipal(false);
                                break;
                                case "SALIR":{
                                    mensajeCancelacion();
                                }
                                menuPrincipal(false);
                                break;
                                default:{
                                    avisoNoValido();
                                }
                            }
                        }
                        case 2:{
                            let menuCarrito = mostrarMenuCarrito("Manga larga", "3.500");
                            switch (menuCarrito){
                                case "PAGAR":{
                                    mensajePago();
                                }
                                menuPrincipal(false);
                                break;
                                case "SALIR":{
                                    mensajeCancelacion();
                                }
                                menuPrincipal(false);
                                break;
                                default:{
                                    avisoNoValido();
                                }
                            }
                        }
                    }
            }
            break;
            case 2: {
                let subMenu = mostrarSubMenu("Pantalones", "Cargo", "Jeans");
                    switch(subMenu){
                        case 1:{
                            let menuCarrito = mostrarMenuCarrito("Cargo", "4.200");
                            switch (menuCarrito){
                                case "PAGAR":{
                                    mensajePago();
                                }
                                menuPrincipal(false);
                                break;
                                case "SALIR":{
                                    mensajeCancelacion();
                                }
                                menuPrincipal(false);
                                break;
                                default:{
                                    avisoNoValido();
                                }
                            }
                        }
                        case 2:{
                            let menuCarrito = mostrarMenuCarrito("Jeans", "5.300");
                            switch (menuCarrito){
                                case "PAGAR":{
                                    mensajePago();
                                }
                                menuPrincipal(false);
                                break;
                                case "SALIR":{
                                    mensajeCancelacion();
                                }
                                menuPrincipal(false);
                                break;
                                default:{
                                    avisoNoValido();
                                }
                            }
                        }
                    }
            }
            break;
            case 3: {
                let subMenu = mostrarSubMenu("Calzados", "Botas", "Deportivos");
                    switch(subMenu){
                        case 1:{
                            let menuCarrito = mostrarMenuCarrito("Botas", "6.100");
                            switch (menuCarrito){
                                case "PAGAR":{
                                    mensajePago();
                                }
                                menuPrincipal(false);
                                break;
                                case "SALIR":{
                                    mensajeCancelacion();
                                }
                                menuPrincipal(false);
                                break;
                                default:{
                                    avisoNoValido();
                                }
                            }
                        }
                        case 2:{
                            let menuCarrito = mostrarMenuCarrito("Deportivos", "5.400");
                            switch (menuCarrito){
                                case "PAGAR":{
                                    mensajePago();
                                }
                                menuPrincipal(false);
                                break;
                                case "SALIR":{
                                    mensajeCancelacion();
                                }
                                menuPrincipal(false);
                                break;
                                default:{
                                    avisoNoValido();
                                }
                            }
                        }
                    }
            }
            break;
            default: {
                avisoNoValido();
            }
            break;
        }
    }
};
programa();
