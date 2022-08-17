/// SIMULADOR DE COMPRAS EN TIENDA. (RAMA ESPECIFICA: EN ESTE CASO ALCOHOL)


console.log("¡Hola! \nBienvenido a la Tienda ");
console.log("Si desea comprar alcohol, a continuación, escriba su edad");
let edad = parseInt(prompt("Ingrese su edad: "));

    // VALIDO LA EDAD PARA INGRESAR A ESTA SECCIÓN
if (edad < 18) {
    alert("Error: No se permite el ingreso a menores de edad.");
}

else {
    let nombre = prompt("Ingrese su nombre: ");
    alert("Bienvenido "+ nombre.toLowerCase() + "\nTu edad es: " +edad);
    let id = "";
    do {
        id = prompt("¿Qué deseas comprar? (Para salir escriba SALIR)"
         +"\nID 1: $500 \nFERNANDITO"   
         +"\nID 2: $700 \nFERNET BRANCA" 
         +"\nID 3: $950 \nLICOR DE UVA"  
    );


    // PRODUCTOS NO INGRESADOS, A DESARROLLAR (SIMULO TENERLOS)
    let prod1 = "FERNANDITO"
    let prod2 = "FERNET BRANCA"
    let prod3 = "LICOR DE UVA"

    /// PRECIOS NO INGRESADOS, A DESARROLLAR (SIMULO TENERLOS)
    let price1 = 500;
    let price2 = 700;
    let price3 = 950;


    // SELECCION DE PRODUCTO
    if (id == 1)
    {
        alert("Has seleccionado "+ prod1);
        let cant = parseInt(prompt("¿Cuantos " +prod1 + " deseas llevar?"));
        alert("Vas a llevar " +  cant + " " +  prod1 + "\nTotal: " +(cant*price1));
        let metodopago = prompt("¿Desea abonar en Efectivo o Tarjeta?");
        metodopago = metodopago.toLowerCase();
        if (metodopago == "efectivo"){
            alert("Has abonado un total de: "+precio_total(price1,cant));
            alert("¡Gracias por tu compra!");
        }
        else if (metodopago == "tarjeta"){
            let cuotas = prompt("Perfecto, abona con tarjeta, seleccione las cuotas: (3/6/9)");
            if (cuotas == 3) {        // PRECIO TOTAL ES EL PRECIO DEL PRODUCTO                  
                let porcentaje_3 = ((precio_total(price1,cant)*15)/100);  // EL INTERES 15 %
                let precio_final = precio_total(price1,cant) + porcentaje_3;
                alert("El precio final de " +prod1+ " es de "+ precio_final);
                alert("¡Gracias por tu compra!")
        }
        else if (cuotas == 6) {        // PRECIO TOTAL ES EL PRECIO DEL PRODUCTO                  
            let porcentaje_3 = ((precio_total(price1,cant)*35)/100);  // EL INTERES 
            let precio_final = precio_total(price1,cant) + porcentaje_3;
            alert("El precio final de " +prod1+ " es de "+ precio_final);
            alert("¡Gracias por tu compra!")
    }
        else if (cuotas == 9) {        // PRECIO TOTAL ES EL PRECIO DEL PRODUCTO                
            let porcentaje_3 = ((precio_total(price1,cant)*60)/100);  // EL INTERES 
            let precio_final = precio_total(price1,cant) + porcentaje_3;
            alert("El precio final de " +prod1+ " es de "+ precio_final);
            alert("¡Gracias por tu compra!")
        }
    }
    }
    else if (id == 2) {
        alert("Has seleccionado "+ prod2);
        let cant = parseInt(prompt("¿Cuantos " + prod2 + " deseas llevar?"));
        alert("Vas a llevar " +  cant + " " +  prod2+ "\nTotal: " +(cant*price2));
        let metodopago = prompt("¿Desea abonar en Efectivo o Tarjeta?");
        metodopago = metodopago.toLowerCase();
        if (metodopago == "Efectivo"){
            alert("Has abonado un total de: "+precio_total(price2,cant));
            alert("¡Gracias por tu compra!");
        }
        else if (metodopago == "tarjeta"){
            let cuotas = prompt("Perfecto, abona con tarjeta, seleccione las cuotas: (3/6/9)");
            if (cuotas == 3) {        // PRECIO TOTAL ES EL PRECIO DEL PRODUCTO                   
                let porcentaje_3 = ((precio_total(price2,cant)*15)/100);  // EL INTERES 15 %
                let precio_final = precio_total(price2,cant) + porcentaje_3;
                alert("El precio final de " +prod2+ " es de "+ precio_final);
                alert("¡Gracias por tu compra!");
        }
        else if (cuotas == 6) {        // PRECIO TOTAL ES EL PRECIO DEL PRODUCTO                   
            let porcentaje_3 = ((precio_total(price2,cant)*35)/100);  // EL INTERES 
            let precio_final = precio_total(price2,cant) + porcentaje_3;
            alert("El precio final de " +prod2+ " es de "+ precio_final);
            alert("¡Gracias por tu compra!");
    }
        else if (cuotas == 9) {        // PRECIO TOTAL ES EL PRECIO DEL PRODUCTO                  
            let porcentaje_3 = ((precio_total(price2,cant)*60)/100);  // EL INTERES 
            let precio_final = precio_total(price2,cant) + porcentaje_3;
            alert("El precio final de " +prod2+ " es de "+ precio_final);
            alert("¡Gracias por tu compra!");
        }
    }
        
    }
    else if (id == 3) {
        alert("Has seleccionado "+ prod3);
        let cant = parseInt(prompt("¿Cuantos " + prod3 + " deseas llevar?"));
        alert("Vas a llevar " +  cant + " " +  prod3+ "\nTotal: " +(cant*price3));
        let metodopago = prompt("¿Desea abonar en Efectivo o Tarjeta?");
        metodopago = metodopago.toLowerCase();
        if (metodopago == "Efectivo"){
            alert("Has abonado un total de: "+precio_total(price2,cant));
            alert("¡Gracias por tu compra!");
        }
        else if (metodopago == "tarjeta"){
            let cuotas = prompt("Perfecto, abona con tarjeta, seleccione las cuotas: (3/6/9)");
            if (cuotas == 3) {        // PRECIO TOTAL ES EL PRECIO DEL PRODUCTO                   
                let porcentaje_3 = ((precio_total(price3,cant)*15)/100);  // EL INTERES 15 %
                let precio_final = precio_total(price3,cant) + porcentaje_3;
                alert("El precio final de " +prod3+ " es de "+ precio_final);
                alert("¡Gracias por tu compra!");
        }
        else if (cuotas == 6) {        // PRECIO TOTAL ES EL PRECIO DEL PRODUCTO                  
            let porcentaje_3 = ((precio_total(price3,cant)*35)/100);  // EL INTERES 
            let precio_final = precio_total(price3,cant) + porcentaje_3;
            alert("El precio final de " +prod3+ " es de "+ precio_final);
            alert("¡Gracias por tu compra!");
    }
        else if (cuotas == 9) {        // PRECIO TOTAL ES EL PRECIO DEL PRODUCTO                 
            let porcentaje_3 = ((precio_total(price3,cant)*60)/100);  // EL INTERES 
            let precio_final = precio_total(price3,cant) + porcentaje_3;
            alert("El precio final de " +prod3+ " es de "+precio_final);
            alert("¡Gracias por tu compra!")
        }
    }
    }
    else if (id !=1 || id!=2 || id!=3 )
    {   if (id == "SALIR") {
        alert("Saliendo del programa...");
    }
        else {
        alert("Por favor, ingrese un ID de la lista.");
        
        }
    }
    } while (id != "SALIR");


// CALCULO EL PRECIO TOTAL. OSEA LA CANTIDAD QUE COMPRA POR EL PRECIO.
function precio_total(price1, cant){
    let precio_producto = price1 * cant;
    precio_producto = parseInt(precio_producto);
    return precio_producto
    }
}
