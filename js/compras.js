var carrito = [];
var total = 0;

function agregarProducto(nombre, precio){
    for(var i = 0; i < carrito.length; i++){
        if(carrito[i].nombre === nombre){
            alert("Este producto ya está en el carrito.");
            return;
        }
    }
    
    carrito.push({
        nombre: nombre,
        precio: precio
    });
    calcularTotal();
    mostrarCarrito();
}

function calcularTotal(){
    total = 0;
    for(var i = 0; i < carrito.length; i++){
        total += carrito[i].precio;
    }
    document.getElementById("totalCarrito").innerHTML = total + " Bs";
}

function mostrarCarrito(){
    var lista = "";
    if(carrito.length === 0){
        lista = "El carrito está vacío";
    } else {
        for(var i = 0; i < carrito.length; i++){
            lista += carrito[i].nombre + " - " + carrito[i].precio + " Bs " + '<img src="https://img.icons8.com/material-outlined/16/ff0000/trash--v1.png" onclick="eliminarProducto(' + i + ')" style="cursor: pointer; margin-left: 10px;"><br>';
        }
    }
    document.getElementById("listaProductos").innerHTML = lista;
    document.getElementById("cantidadProductos").innerHTML = carrito.length;
}

function vaciarCarrito(){
    carrito = [];
    total = 0;
    mostrarCarrito();
    document.getElementById("totalCarrito").innerHTML = "0 Bs";
}
function eliminarUltimoProducto(){
    if(carrito.length > 0){
        carrito.pop();
        calcularTotal();
        mostrarCarrito();
    }
}

function eliminarProducto(indice){
    if(indice >= 0 && indice < carrito.length){
        carrito.splice(indice, 1);
        calcularTotal();
        mostrarCarrito();
    }
}

function mostrarLogin(){
    if(carrito.length === 0){
        alert("El carrito está vacío. Agrega productos antes de comprar.");
        return;
    }
    document.getElementById("modalLogin").style.display = "block";
}

function cerrarLogin(){
    document.getElementById("modalLogin").style.display = "none";
    document.getElementById("usuario").value = "";
    document.getElementById("contraseña").value = "";
}


function procesarCompra(){
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;
    
    if(usuario === "" || contraseña === ""){
        alert("Por favor, completa todos los campos.");
        return;
    }
    
    
    cerrarLogin();
    

    alert("¡Felicidades por tu compra!");
    

    vaciarCarrito();
}