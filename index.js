const containerDeProductos = document.querySelector('#containerDeProductos');;
const containerCarrito = document.querySelector('#containerCarrito');
const vaciarCarrito = document.querySelector('#vaciarCarrito')
const img_cart = document.getElementById("img-carrito");
const pagar = document.querySelector('#pagar');
const pagar_save = document.querySelector('#pagar_save');
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })


let titulo = document.getElementById("titulo");
let mensaje = document.getElementById("mensaje");
let compra = document.getElementById("compra");

let inputCompra = document.createElement("input");
let parrafo = document.createElement("p");

let formulario = document.getElementById("formulario");
let boton = document.createElement("button");
let boton_2 = document.getElementById("proceso")

boton_2.style.display = "none";
img_cart.style.display = "none";
titulo.style.color = "grey";
pagar_save.style.display = "none";
pagar.style.display = "none";

// ARRAYS
let lista_productos = [];
let carrito = [];
let totalCarro = [];
let carritoSave = [];



const objetos = [{
    marca: "",
    nombre: 'Fernandito',
    precio: 500,
    id: 1,
    stock: 10000,
    img: 'images/fernandito.png'
},
{
    marca: "",
    nombre: 'Licor de Uva',
    precio: 700,
    id: 2,
    stock: 10000,
    img: 'images/licordeuva.png'
},
{
    marca: "",
    nombre: 'Fernet Branca',
    precio: 950,
    id: 3,
    stock: 10000,
    img: 'images/fernetbranca.png'
},
{
    marca: "",
    nombre: 'Speed c/Vodka',
    precio: 660,
    id: 4,
    stock: 10000,
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
        img,
        cant
    }) {
        this.marca = marca
        this.nombre = nombre
        this.precio = precio
        this.id = id
        this.stock = stock
        this.img = img
        this.cant = cant

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

function borrarLocalStorage(){
    localStorage.removeItem("carrito_json");
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
        recuCarrito()
        
    }
    else if (edad.value < 18) {
        if (edad.value < 15){
            parrafo.innerText   = "Por favor, ingrese una edad superior a 15 años";
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

function saveCarrito(){
    carrito.forEach(elm => {
        let productosGuardar = {marca: elm.marca, nombre: elm.nombre, precio: elm.precio, id: elm.id, stock: elm.stock, img: elm.img, cant: inputCompra.value}
        carritoSave.push(productosGuardar);
        let carrito_json = JSON.stringify(carritoSave);
        localStorage.setItem("carrito_json", carrito_json);
        console.log(carrito_json);
            })
}


function recuCarrito(){
    img_cart.style.display = "inline";
    let carritoGuardado = localStorage.getItem("carrito_json");
    carritoGuardado = JSON.parse(carritoGuardado);
    console.log(carritoGuardado)
    carritoSave.push(carritoGuardado);
    console.log(carritoSave);
    if (carritoSave[0] != null){
        totalCarritoSave(carritoGuardado)
        renderCarritoSave() // LISTO
    }
    else {
        console.log("No había productos guardados");
    }
}


function renderCarritoSave(){
    pagar.style.display = "none";
    pagar_save.style.display = "inline";
    containerCarrito.innerHTML = ""
    if(carritoSave[0] != null){
        carritoSave[0].forEach(elm => {
            containerCarrito.innerHTML += `
            <th>${elm.nombre}</th>
            <th>${elm.precio}</th>
            <th class="btnEliminar" data-id="${elm.id}">X</th>
            <th>${elm.cant}</th>
            
            ` 
        })
    }
    else{
        containerCarrito.innerHTML = ""
    }
}

function addCarrito(id){
    carritoSave = [];
    let productoEncontrado = lista_productos.filter(elm => elm.id == id)
    carrito.push(productoEncontrado[0])
    productoEncontrado[0].total()
    console.log(productoEncontrado[0].total);
        totalCarrito()
        renderCarrito()
        saveCarrito()
}

function totalCarrito() {
    let precios = totalCarro.reduce((a,b) => a + b)
    document.querySelector('#precio').innerHTML = `Total $${precios}`
    
}

let sum = 0;
function totalCarritoSave(carritoGuardado){
    
    for (let i = 0; i < carritoGuardado.length; i++) {
    sum += carritoGuardado[i].precio*carritoGuardado[i].cant;
    }
    console.log(sum);
    
    document.querySelector('#precio').innerHTML = `Total $${sum}`
}

function renderCarrito(){
    pagar_save.style.display = "none";
    pagar.style.display = "inline";
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
    pagar_save.style.display = "none";
    e.preventDefault()
    if (totalCarro.length == 0) {
        console.log("No tienes productos para pagar");
    }
    else {  
        pagar_first()
    
}
})

pagar_save.addEventListener('click', (e) =>{
    pagar.style.display = "none";
    e.preventDefault()
    if (carritoSave.length == 0) {
        console.log("No tienes productos para pagar, ya compraste.")
    }
    else {
        pagarSave()
        }
        
})


document.addEventListener('click', (e) => {
        if(e.target.classList.contains('btnEliminar')){
            eliminarProducto(e.target.dataset.id)
        }
    } )

function pagar_first(){
        Swal.fire({
            title: "Metodo de Pago",
            text: "¿Desea pagar en efectivo o tarjeta?",
            input: 'text',
            showCancelButton: true        
        }).then((result) => {
            let precios = totalCarro.reduce((a,b) => a + b)
            result.value = result.value.toLowerCase()
            if (result.value == "efectivo") {
                swalWithBootstrapButtons.fire(
                    'Pago aceptado',
                    'Pagaste en efectivo un total de: $'+precios,
                    'success'
                  )
                carrito.forEach(elm => {
                    update_stock(elm, inputCompra.value);
                })
                reset_carrito()
                borrarLocalStorage()
            }
            else if (result.value == "tarjeta"){
                Swal.fire({
                    title: "Cuotas",
                    text: "Perfecto, abonas con tarjeta, elija las cuotas (3/6/9)",
                    input: 'text',
                    showCancelButton: true        
                }).then((cuotas) => {
                    if (cuotas.value) {
                        cuotas.value = parseInt(cuotas.value);
                        precio_cuotas(cuotas.value, precios);
                        carritoSave.forEach(elm => {
                            update_stock(elm, inputCompra.value);
                        })
                        reset_carrito()
                        borrarLocalStorage()
                    }
                });
            }
            else {
                swalWithBootstrapButtons.fire(
                    'Error',
                    'Por favor, elija un metodo de pago',
                    'error'
                  )
            }
        });
    }    

function eliminarProducto(id){
    let item = carrito.find(elm => elm.id == id)
    item.resta()
    totalCarrito()
    let index = carrito.indexOf(item)
    carrito.splice(index, 1)
    renderCarrito() 
    }

    

function precio_cuotas(cantCuotas, precios){
        if (cantCuotas === 3){ 
            let porcentaje_3 = (precios*15/100); // EL INTERES 15 %
            let precio_final = precios + porcentaje_3;
            alertaCuotas(precio_final, cantCuotas);


    }
        else if(cantCuotas === 6){
            let porcentaje_6 = (precios*35/100); // EL INTERES 35 %
            let precio_final = precios + porcentaje_6;
            alertaCuotas(precio_final, cantCuotas);
    }
        else if(cantCuotas === 9){
            let porcentaje_9 = (precios*50/100); // EL INTERES 50 %
            let precio_final = precios + porcentaje_9;
            alertaCuotas(precio_final, cantCuotas);
    }
}


function update_stock(elm,cant){

    elm.stock = elm.stock -cant;
    console.log("El nuevo stock de: ", elm.nombre, "es", elm.stock);

    }

function alertaCuotas(precio_final, cantCuotas){
    swalWithBootstrapButtons.fire(
        'Pago aceptado',
        'Pagaste en ' +  cantCuotas + ' cuotas'  + ' un total de: $'+ precio_final,
        'success'
      )
}

function pagarSave (){
    Swal.fire({
        title: "Metodo de Pago",
        text: "¿Desea pagar en efectivo o tarjeta?",
        input: 'text',
        showCancelButton: true        
    }).then((result) => {
        result.value = result.value.toLowerCase()
        if (result.value == "efectivo") {
            swalWithBootstrapButtons.fire(
                'Pago aceptado',
                'Pagaste en efectivo un total de: $'+sum,
                'success'
              )
            carritoSave[0].forEach(elm => {
                update_stock(elm, elm.cant);
            })
            reset_carrito()
            borrarLocalStorage()
        }
        else if (result.value == "tarjeta"){
            Swal.fire({
                title: "Cuotas",
                text: "Perfecto, abonas con tarjeta, elija las cuotas (3/6/9)",
                input: 'text',
                showCancelButton: true        
            }).then((cuotas) => {
                if (cuotas.value) {
                    cuotas.value = parseInt(cuotas.value);
                    precio_cuotas(cuotas.value, sum);
                    carritoSave[0].forEach(elm => {
                        update_stock(elm, elm.cant);
                    })
                    reset_carrito()
                    borrarLocalStorage()
                }
            });
        }
        else {
            swalWithBootstrapButtons.fire(
                'Error',
                'Por favor, elija un metodo de pago',
                'error'
              )
        }
    });
}

 function reset_carrito () {
    
        carrito = [];
        carritoSave = [];
        totalCarro = [];
        renderCarrito();
        renderCarritoSave();
        document.querySelector ("#precio ").innerText = "$0";
    }

    
vaciarCarrito.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#precio').innerText = "$0"
        borrarLocalStorage()
        carrito = []
        carritoSave = [];
        totalCarro = []
        renderCarrito() 
        renderCarritoSave()
    } )
    
}

