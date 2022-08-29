/// SIMULADOR DE COMPRAS EN TIENDA. (RAMA ESPECIFICA: EN ESTE CASO ALCOHOL)

let text = document.getElementById("first");
text.style.textAlign = "center";









class Productos{
    constructor(id,name,price,stock){
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
}

let contra_admin = 1337;
let lista_productos = [];    // ID // NAME // PRICE // STOCK
let lista_productos_vendidos = [];

let producto1 = new Productos(1, "FERNANDITO", 500, 50);
let producto2 = new Productos(2, "FERNET BRANCA", 700, 50);
let producto3 = new Productos(3, "LICOR DE UVA", 950, 50);



cont_1 = 0
cont_2 = 0 
cont_3 = 0



lista_productos.push(producto1);
lista_productos.push(producto2);
lista_productos.push(producto3);

console.log(lista_productos);

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
            console.log("\n")
            console.log("-------------------")
            console.log("ID: ", producto.id);
            console.log("Nombre: ", producto.name);
            console.log("Precio ", producto.price);
        }
        console.log("\n")
        console.log("Aclaración: cuando ingrese salir, ademas de salir del programa, se le mostrara el total de lo que ha gastado en la tienda, en efectivo y también con tarjeta")
        id = prompt("¿Qué deseas comprar? (Para salir escriba SALIR)");
        console.log(producto1.stock);

        

    // SELECCION DE PRODUCTO
    let encontrado = lista_productos.filter(elm => elm.id == id);
    if (encontrado[0].id)
    {
        alert("Has seleccionado "+ producto1.name);
        let cant = parseInt(prompt("¿Cuantos " +producto1.name + " deseas llevar?"));
        if (cant > producto1.stock){
            alert("No tenemos tanta cantidad de ese producto, nos quedan: " + producto1.stock + " " + producto1.name + " nada mas");
        }
        else {
        alert("Vas a llevar " +  cant + " " +  producto1.name + "\nTotal: " +(cant*producto1.price));
        let metodopago = prompt("¿Desea abonar en Efectivo o Tarjeta?");
        metodopago = metodopago.toLowerCase();
        if (metodopago == "efectivo"){
            alert("Has abonado un total de: "+precio_total(producto1,cant));
            let cant_11 = cant;
            cont_1 = cant_11;
            update_stock(producto1,cont_1);
            lista_productos_vendidos.push(producto1);
            alert("¡Gracias por tu compra!");
            console.clear();
        }
        else if (metodopago == "tarjeta"){
            let cuotas = prompt("Perfecto, abona con tarjeta, seleccione las cuotas: (3/6/9)");
            precio_cuotas(cuotas, producto1, cant, producto1.name);  // LLAMO A LA FUNCION PARA CALCULAR X CUOTAS
            console.clear();
    }
    }
    }
    else if (encontrado[1].id) {
        alert("Has seleccionado "+ producto2.name);
        let cant = parseInt(prompt("¿Cuantos " + producto2.name + " deseas llevar?"));
        if (cant > producto2.stock){
            alert("No tenemos tanta cantidad de ese producto, nos quedan: " + producto2.stock + " " + producto2.name + " nada mas");
        }
        else {
        alert("Vas a llevar " +  cant + " " +  producto2.name+ "\nTotal: " +(cant*producto2.price));
        let metodopago = prompt("¿Desea abonar en Efectivo o Tarjeta?");
        metodopago = metodopago.toLowerCase();
        if (metodopago == "efectivo"){
            alert("Has abonado un total de: "+precio_total(producto2,cant));
            let cant_22 = cant;
            cont_2 = cant_22;
            update_stock(producto2,cont_2);
            lista_productos_vendidos.push(producto2);
            alert("¡Gracias por tu compra!");
            console.clear();
        }
        else if (metodopago == "tarjeta"){
            let cuotas = prompt("Perfecto, abona con tarjeta, seleccione las cuotas: (3/6/9)");
            precio_cuotas(cuotas, producto2, cant, producto2.name);  // LLAMO A LA FUNCION PARA CALCULAR X CUOTAS
            console.clear();
    }
    }
    }
    else if (encontrado[2].id) {
        alert("Has seleccionado "+ producto3.name);
        let cant = parseInt(prompt("¿Cuantos " + producto3.name + " deseas llevar?"));
        if (cant > producto3.stock){
            alert("No tenemos tanta cantidad de ese producto, nos quedan: " + producto3.stock + " " + producto3.name + " nada mas");
        }
        else {
        alert("Vas a llevar " +  cant + " " +  producto3.name+ "\nTotal: " +(cant*producto3.price));
        let metodopago = prompt("¿Desea abonar en Efectivo o Tarjeta?");
        metodopago = metodopago.toLowerCase();
        if (metodopago == "efectivo"){
            alert("Has abonado un total de: "+precio_total(producto3,cant));
            let cant_33 = cant;
            cont_3 = cant_33;
            update_stock(producto3,cont_3); 
            lista_productos_vendidos.push(producto3);
            alert("¡Gracias por tu compra!");
            console.clear();
        }
        else if (metodopago == "tarjeta"){
            let cuotas = prompt("Perfecto, abona con tarjeta, seleccione las cuotas: (3/6/9)");
            precio_cuotas(cuotas, producto3, cant, producto3.name);  // LLAMO A LA FUNCION PARA CALCULAR X CUOTAS
            console.clear();
    }
    }
    }

    else if (id !=1 || id!=2 || id!=3 )
    {   if (id == "SALIR") {
        console.log("Compraste: " +producto1.name , "\nCantidad: " + parseInt(cont_1));
        console.log("Compraste: " +producto2.name , "\nCantidad: " + parseInt(cont_2));
        console.log("Compraste: " +producto3.name , "\nCantidad: " + parseInt(cont_3));
        let gasto_efectivo = (cont_1 * producto1.price) + (cont_2 * producto2.price) + (cont_3 * producto3.price);
        alert("Total gasto en efectivo: " +gasto_efectivo);
        console.log(lista_productos);
        let admin = parseInt(prompt("Si sos admin, ingresa la contraseña: "))
        if (admin == contra_admin){
            console.log("Bienvenido/a al panel de administración");
            alert("(A) Mostrar lista de productos vendidos y cantidades")
            let opciones = prompt("Ingrese una opción: ")
            if (opciones == "A"){
                lista_productos_vendidos.forEach(prod_vendidos => {
                    console.log("---------------Vendiste hoy en total---------------")
                    console.log("Nombre del Producto: ", prod_vendidos.name);
                    console.log("Ganancia en efectivo: ", gasto_efectivo);
                    console.log("Te quedan: ", prod_vendidos.stock);
                    
                })
            }

        }
        else {
            alert("¡Te esperamos nuevamente cuando quieras!");
        }
    }
    
        else{
        alert("Por favor, ingrese un ID de la lista.");
        
        }
    }

    } while (id != "SALIR");

}






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
function update_stock(producto,cant){

    producto.stock = producto.stock -cant;
    console.log("El nuevo stock de: ", producto.name, "es", producto.stock);

    }

