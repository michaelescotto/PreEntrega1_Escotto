const mensajeBienvenida = () => {
    alert("¡Bienvenido a la tienda!\n\nHaga click en el botón Aceptar o presione Enter para continuar.");
}
const mostrarMenuPrincipal = () => {
    parseInt(prompt("En nuestra tienda tenemos los siguientes artículos a la venta:\n\n1 - Remeras\n2 - Pantalones\n\n0 - Salir\n\nElija el número de la opción para continuar."));
}
const mostrarSubMenu = (menu) => {
    parseInt(prompt(`Has seleccionado el menú de ${menu}:\n\n1 - Manga corta\n2 - Manga Larga\n\n0 - Volver al menú anterior.`));
}
const mostrarMenuCarrito = (articulo, precio) => {
    prompt(`Desea agregar al carrito:\n\n${articulo}\n\nTotal $${precio}\n\nPara pagar escriba PAGAR o SALIR para cancelar.`);
}
const mensajePago = () => {
    alert("¡Gracias por su compra!\n\nSera redirigido a la pagina del banco en unos segundos...\n\n");
    console.log("Factura de compra:\n\nRemera - Manga corta.\nTotal $2.500.\n\n¡Gracias por su compra!");
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
        if (menuPrincipal === 0){
         break;
        }
        switch (menuPrincipal){

        }

    }


};


