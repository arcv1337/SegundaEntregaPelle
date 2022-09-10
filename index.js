const containerDeProductos = document.querySelector('#containerDeProductos');;
const containerCarrito = document.querySelector('#containerCarrito');
const vaciarCarrito = document.querySelector('#vaciarCarrito')
const img_cart = document.getElementById("img-carrito");
const pagar = document.querySelector('#pagar')



let titulo = document.getElementById("titulo");
titulo.style.color = "grey";
let mensaje = document.getElementById("mensaje");
let compra = document.getElementById("compra");

let inputCompra = document.createElement("input");
let parrafo = document.createElement("p");

let formulario = document.getElementById("formulario");
let boton = document.createElement("button");
let boton_2 = document.getElementById("proceso")
boton_2.style.display = "none";
img_cart.style.display = "none";


// ARRAYS
let lista_productos = [];
let carrito = [];
let totalCarro = [];
let arreglo_usuarios = [];



const objetos = [{
    marca: "",
    nombre: 'Fernandito',
    precio: 500,
    id: 1,
    stock: 50,
    img: 'images/fernandito.png'
},
{
    marca: "",
    nombre: 'Licor de Uva',
    precio: 700,
    id: 2,
    stock: 50,
    img: 'images/licordeuva.png'
},
{
    marca: "",
    nombre: 'Fernet Branca',
    precio: 950,
    id: 3,
    stock: 50,
    img: 'images/fernetbranca.png'
},
{
    marca: "",
    nombre: 'Speed c/Vodka',
    precio: 660,
    id: 4,
    stock: 50,
    img: 'images/speedvodka.png'
},
]


// CONSTRUCTOR
class Alcoholes {
    constructor({
        marca,
        nombre,
        precio,
        id,
        stock,
        img
    }) {
        this.marca = marca
        this.nombre = nombre
        this.precio = precio
        this.id = id
        this.stock = stock
        this.img = img
    }
    total() {
        totalCarro.push(this.precio*inputCompra.value); 
    }
    resta(){
        totalCarro.push(-(this.precio*inputCompra.value))
        console.log(totalCarro)
    }
}

let boton2 = document.getElementById("boton2");
let boton3 = document.getElementById("boton3");
boton3.addEventListener("click", set_data );
boton2.addEventListener('click', recuperar);



function set_data(){


    let name = document.getElementById("nombre");
    let age = document.getElementById("edad");

    sessionStorage.setItem("name", name.value);
    sessionStorage.setItem("age", age.value);



    
}


function recuperar(){
    
    let name = document.getElementById("nombre");
    let age = document.getElementById("edad");

    name.value = sessionStorage.getItem("name");
    age.value = sessionStorage.getItem("age");

}



// FUNCIONES
function valido_edad(){
    let edad = document.getElementById("edad");
    let nombre = document.getElementById("nombre");
    if (nombre.value == ""){
        parrafo.innerText = "Por favor, inserte un nombre antes de ingresar";
    }
    else{
    if(edad.value >= 18){
        boton2.style.display = "none";
        boton3.style.display = "none";
        inputCompra.placeholder = "Ingrese la cantidad";
        inputCompra.style.textAlign = "center";
        inputCompra.style.backgroundColor = "black";
        inputCompra.style.color = "red";
        compra.append(inputCompra);
        console.log(inputCompra);
        console.log("Logeo correcto");
        parrafo.innerText = `\nBienvenido/a a la Tienda ${nombre.value}`
        objetos.forEach(elm => {
            // console.log(elm)
            lista_productos.push(new Alcoholes(elm))

            plantillas(lista_productos)
            formulario.style.display = "none";
            titulo.style.display = "none";
        })
        mensaje.append(parrafo);
        parrafo.style.fontFamily = "Verdana";
        parrafo.style.fontSize = "25px";
        parrafo.style.textAlign = "center";
        parrafo.style.color = "white";
    }
    else if (edad.value < 18) {
        if (edad.value < 15){
            parrafo.innerText = "Por favor, ingrese una edad superior a 15 años";
            mensaje.append(parrafo);
            parrafo.style.fontFamily = "Verdana";
            parrafo.style.fontSize = "25px";
            parrafo.style.textAlign = "center";
            parrafo.style.color = "orange";
        }
        else{
        console.log("No sos mayor de edad");
        parrafo.innerText = "No sos mayor, proximamente sección para infantiles.";
        mensaje.append(parrafo);
        parrafo.style.fontFamily = "Verdana";
        parrafo.style.fontSize = "25px";
        parrafo.style.textAlign = "center";
        parrafo.style.color = "red";
        }
    }
}
}

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('button')){
        if (inputCompra.value == ""){
            alert("Por favor, ingrese una cantidad antes de agregar");
        }
        else if (inputCompra.value == 0) {
            alert("Ingrese un numero mayor a 0");
        }
        else {  
        img_cart.style.display = "inline";
        addCarrito(e.target.id)
}
    }
})



function addCarrito(id){
   let productoEncontrado = lista_productos.filter(elm => elm.id == id)
   carrito.push(productoEncontrado[0])
   productoEncontrado[0].total()
   console.log(productoEncontrado[0].total);
    totalCarrito()
    renderCarrito()
}

function totalCarrito() {
    let precios = totalCarro.reduce((a,b) => a + b)
    let precio = document.querySelector('#precio').innerHTML = `$${precios}`
}


function renderCarrito(){
    containerCarrito.innerHTML = ""

    carrito.forEach(elm => {
        containerCarrito.innerHTML += `
        <th>${elm.nombre}</th>
        <th>${elm.precio}</th>
        <th class="btnEliminar" data-id="${elm.id}">X</th>
        <th>${inputCompra.value}</th>
        `
    })
}

function plantillas(lista_productos) {

    containerDeProductos.innerHTML = ""
    lista_productos.forEach(elm => {
        containerDeProductos.innerHTML += `
        <div class="card">
        <div class="card-img"<p class="text-title"></div><img src="./${elm.img}"  alt="imagen" class="tamaño"/>
        
        <div class="card-info">
          <p class="text-title"> ${elm.marca}  ${elm.nombre} </p>
        </div>
        <div class="card-footer">
        <span class="text-title">$${elm.precio}</span>
        <div class="card-button">
          <button id="${elm.id}" class="button">Agregar </button>
        </div>

      </div>
      ID: ${elm.id}</div>
        `
        

    })

pagar.addEventListener('click', (e) =>{
    e.preventDefault()
    let precios = totalCarro.reduce((a,b) => a + b)
    if (totalCarro.length == 0) {
        alert("No tienes productos para pagar");
    }
    else {
    let metodopago = prompt("¿Deséa abonar en Efectivo o Tarjeta?");

    metodopago = metodopago.toLowerCase();
    
        if (metodopago == "efectivo")
            {
                alert("Has abonado un total de: " +precios);
                alert("Gracias por tu compra!");
                carrito.forEach(elm => {
                    update_stock(elm, inputCompra.value);
                })
                reset_carrito()
            }
        else if (metodopago == "tarjeta"){
            let cuotas = prompt("Perfecto, abona con tarjeta, seleccione las cuotas: (3/6/9)");
            console.log(cuotas);
            console.log(precios);
            precio_cuotas(cuotas, precios);
            carrito.forEach(elm => {
                update_stock(elm, inputCompra.value);
            })
            reset_carrito()
    }
        else {
            alert("Por favor, ingrese un metodo de pago disponible.");
        }
}
})


document.addEventListener('click', (e) => {
        if(e.target.classList.contains('btnEliminar')){
            eliminarProducto(e.target.dataset.id)
        }
    } )

function eliminarProducto(id){
    let item = carrito.find(elm => elm.id == id)
    item.resta()
    totalCarrito()
    let index = carrito.indexOf(item)
    carrito.splice(index, 1)
    renderCarrito() 
    }
    
function precio_cuotas(cantCuotas, precios){
        if (cantCuotas == 3){ 
            let porcentaje_3 = (precios*15/100); // EL INTERES 15 %
            let precio_final = precios + porcentaje_3;
            alert("El precio final de su compra es de "+precio_final);


    }
        else if(cantCuotas == 6){
            let porcentaje_6 = (precios*35/100); // EL INTERES 15 %
            let precio_final = precios + porcentaje_6;
            alert("El precio final de su compra es de "+precio_final);
    }
        else if(cantCuotas == 9){
            let porcentaje_9 = (precios*50/100); // EL INTERES 15 %
            let precio_final = precios + porcentaje_9;
            alert("El precio final de su compra es de "+precio_final);
    }
}


function update_stock(elm,cant){

    elm.stock = elm.stock -cant;
    console.log("El nuevo stock de: ", elm.nombre, "es", elm.stock);

    }


 function reset_carrito () {
        carrito = [];
        totalCarro = [];
        renderCarrito();
        document.querySelector ("#precio ").innerText = "$0";
    }

    
vaciarCarrito.addEventListener('click', (e) => {
        e.preventDefault();
        carrito = []
        totalCarro = []
        renderCarrito()
        let precio = document.querySelector('#precio').innerText = "$0"
    } )
    
}

