//Clase constructora
class Productos {
    constructor(name, price, id, img) {
        this.name = name,
            this.price = price,
            this.id = id,
            this.img = img,
            this.quantity = 1
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