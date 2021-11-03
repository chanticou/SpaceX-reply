//Clase constructora
class Productos {
    constructor(name, price, id, img, quantity) {
        this.name = name,
            this.price = price,
            this.id = id,
            this.img = img,
            this.quantity = parseInt(quantity)
    }
}

const arrayProductos = []

//Llamo a las cards guardadas en mi Json
$.getJSON("../productos.json", function (datos, estado) {
    //Succes
    console.log(datos)
    console.log(estado)

    datos.forEach(prod => arrayProductos.push(new Productos(prod.name, prod.price, prod.id, prod.img, prod.quantity)))

    //Lamo a la funcion renderCards y le paso como parametro mi arrayProductos
    renderCards(arrayProductos)

    // BOTON CARRITO QUE ABRE EL POPUP, FUNCION EN shopFunction=>abrirPopUp
    cartButton.addEventListener('click', abrirPopUp)


    // CERRAR POPUP
    cerrarPopUp.addEventListener('click', closepopup)


})



//Recupero datos del cart desde el local storage
$(document).ready(function () {
    //1) Pregunto si existe la clave 'Pedidos' en el local Storage
    if ('Pedidos' in localStorage) {
        //2) Si existe, obtengo los datos en un array y los paso a objetos con JSON.parse()
        const datosLocal = JSON.parse(localStorage.getItem('Pedidos'))

        datosLocal.forEach(prod => {
           
            cart.push(new Productos(prod.name, prod.price, prod.id, prod.img, prod.quantity))
         
        })

        mostrarPopup(cart)
        
        contadorCarrito.innerText = cart.reduce((acc,el)=>acc+el.quantity, 0)

    }

})