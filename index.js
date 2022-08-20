/// SIMULADOR DE COMPRAS EN TIENDA. (RAMA ESPECIFICA: EN ESTE CASO ALCOHOL)




class Productos{
    constructor(id,name,price,stock){
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
}

let lista_productos = [];    // ID // NAME // PRICE // STOCK
let producto1 = new Productos(1, "FERNANDITO", 500, 10);
let producto2 = new Productos(2, "FERNET BRANCA", 700, 10);
let producto3 = new Productos(3, "LICOR DE UVA", 950, 10);

lista_productos.push(producto1);
lista_productos.push(producto2);
lista_productos.push(producto3);


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
        for(let producto of lista_productos){
            console.log("-------------------")
            console.log("ID: ", producto.id);
            console.log("Nombre: ", producto.name);
            console.log("Precio ", producto.price);
        }
        id = prompt("¿Qué deseas comprar? (Para salir escriba SALIR)");



    // SELECCION DE PRODUCTO
    if (id == 1)
    {
        alert("Has seleccionado "+ producto1.name);
        let cant = parseInt(prompt("¿Cuantos " +producto1.name + " deseas llevar?"));
        alert("Vas a llevar " +  cant + " " +  producto1.name + "\nTotal: " +(cant*producto1.price));
        let metodopago = prompt("¿Desea abonar en Efectivo o Tarjeta?");
        metodopago = metodopago.toLowerCase();
        if (metodopago == "efectivo"){
            alert("Has abonado un total de: "+precio_total(producto1,cant));
            alert("¡Gracias por tu compra!");
        }
        else if (metodopago == "tarjeta"){
            let cuotas = prompt("Perfecto, abona con tarjeta, seleccione las cuotas: (3/6/9)");
            precio_cuotas(cuotas, producto1, cant, producto1.name);  // LLAMO A LA FUNCION PARA CALCULAR X CUOTAS
    }
    }
    else if (id == 2) {
        alert("Has seleccionado "+ producto2.name);
        let cant = parseInt(prompt("¿Cuantos " + producto2.name + " deseas llevar?"));
        alert("Vas a llevar " +  cant + " " +  producto2.name+ "\nTotal: " +(cant*producto2.price));
        let metodopago = prompt("¿Desea abonar en Efectivo o Tarjeta?");
        metodopago = metodopago.toLowerCase();
        if (metodopago == "efectivo"){
            alert("Has abonado un total de: "+precio_total(producto2,cant));
            alert("¡Gracias por tu compra!");
        }
        else if (metodopago == "tarjeta"){
            let cuotas = prompt("Perfecto, abona con tarjeta, seleccione las cuotas: (3/6/9)");
            precio_cuotas(cuotas, producto2, cant, producto2.name);  // LLAMO A LA FUNCION PARA CALCULAR X CUOTAS
    }
        
    }
    else if (id == 3) {
        alert("Has seleccionado "+ producto3.name);
        let cant = parseInt(prompt("¿Cuantos " + producto3.name + " deseas llevar?"));
        alert("Vas a llevar " +  cant + " " +  producto3.name+ "\nTotal: " +(cant*producto3.price));
        let metodopago = prompt("¿Desea abonar en Efectivo o Tarjeta?");
        metodopago = metodopago.toLowerCase();
        if (metodopago == "efectivo"){
            alert("Has abonado un total de: "+precio_total(producto3,cant));
            alert("¡Gracias por tu compra!");
        }
        else if (metodopago == "tarjeta"){
            let cuotas = prompt("Perfecto, abona con tarjeta, seleccione las cuotas: (3/6/9)");
            precio_cuotas(cuotas, producto3, cant, producto3.name);  // LLAMO A LA FUNCION PARA CALCULAR X CUOTAS
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

}
// CALCULO EL PRECIO TOTAL. OSEA LA CANTIDAD QUE COMPRA POR EL PRECIO.




function precio_total(producto, cant){
    let precio_producto = producto.price * cant;
    precio_producto = parseInt(precio_producto);
    return precio_producto
    }




function precio_cuotas(cantCuotas, precio, cant, nombreProd){
        if (cantCuotas == 3){ 
            let porcentaje_3 = ((precio_total(precio,cant)*35)/100);  // EL INTERES 15 %
            let precio_final = precio_total(precio,cant) + porcentaje_3;
            alert("El precio final de " +nombreProd+ " es de "+precio_final);


    }
        else if(cantCuotas == 6){
            let porcentaje_6 = ((precio_total(precio,cant)*35)/100);  // EL INTERES 35 %
            let precio_final = precio_total(precio,cant) + porcentaje_6;
            alert("El precio final de " +nombreProd+ " es de "+precio_final);
    }
        else if(cantCuotas == 9){
            let porcentaje_9 = ((precio_total(precio,cant)*50)/100);  // EL INTERES 50 %
            let precio_final = precio_total(precio,cant) + porcentaje_9;
            alert("El precio final de " +nombreProd+ " es de "+precio_final);
    }
}
/// precio_cuotas(cuotas, producto1, cant, producto1.name);  

// precio_total(producto1,cant));