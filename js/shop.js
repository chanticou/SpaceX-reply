//clase
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

//Llamo a las cards guardadas en un Json
$.getJSON("../productos.json", function (datos, estado) {
    console.log(datos)
    console.log(estado)


    datos.forEach(prod => arrayProductos.push(new Productos(prod.name, prod.price, prod.id, prod.img, prod.quantity)))

    renderCards(arrayProductos)



        // ABRIR POPUP
        document.querySelector('.container-cart').addEventListener('click', () => {
            document.getElementById('popup').classList.add('active')
        })


        // CERRAR POPUP
        document.querySelector('#closePopup').addEventListener('click', () => {
            document.getElementById('popup').classList.remove('active')
        })
    

})