//Funtion quantity
let subtotal = (quantity, price) => {
    return quantity * price
}


//MOSTRAR (le paso como parametro el array de productos que le pido en mi json)
const renderCards = (array) => {

    array.forEach(producto => {
        //Renderizo las tarjetas en el navegador
        containerCards.innerHTML += `
                    <div class='content-card'>
                    <div class="card">
                        <img  ${producto.img} class="card-img-top" alt="Kids-jumper">
                        <div class="card-body">
                        <h5 class="card-title">${producto.name}</h5>
                        <h3 class='precio'>Price:US$ ${producto.price}</h3>
                        <button id=${producto.id}  type="button"  class="btn btnCart btn-dark">BUY</button>
                    </div>
                    </div>
                    </div>
                    `
        //ACCESO AL DOM PARA OBTENER LOS BOTONES DE CLASE .btnCart
        const buttonBuy = document.querySelectorAll('.btnCart')

        //POR CADA BOTON AÑADIMOS UN EVENTO
        buttonBuy.forEach(button => {
            button.addEventListener('click', () => {
      
                agregarAcarrito(button)
      
            })
        })

    })

}





//function AGREGAR AL CARRITO
const agregarAcarrito = (button) => {

    //BUSCAMOS SI EL PRODUCTO YA ESTA SELECCIONADO EN EL CARRITO
    const existe = cart.find(producto => producto.id == button.id)
    


    // SI EL PRODUCTO NO FUE SELECCIONADO PREVIAMENTE LA BUSQUEDA DA UNDEFINED
    //SI EL PRODUCTO NO ESTA ADENTRO DEL CARRITO, LO AGRUEGAMOS
    if (existe == undefined) {
        //BUSCAMOS EL OBJETO PRODUCTO EN EL ARRAY DE PRODUCTOS Y LO AÑADIMOS AL CARRITO
        const metodoFind = arrayProductos.find(producto => producto.id == button.id)
        cart.push(metodoFind)

    } else {
        //SI LA BUSQUEDA RETORNA EL OBJETO EXITENTE EN EL ARRAY SUMAMOS UNA CANTIDAD
        //SI EL PRODUCTO ESTA ADENTRO DEL CARRITO LE AGRUEGAMOS UNO

       existe.quantity = existe.quantity + 1;   
    
 
    }

    //FUNCIONALIDAD PARA SUMAR CANTIDAD TOTAL DE LOS PRODUCTOS EN BASE A LA CANTIDAD
    funcionalidadCarrito(cart)

    localStorageFunction()
    //FUNCION PARA MOSTRAR EL POPUP, LE PASAMOS COMO PARAMETRO EL ARRAY DEL CARRITO
    mostrarPopup(cart)


};


//LOCAL STORAGE FUNCTION
const localStorageFunction = () => {

    /*LOCAL STORAGE=> lo guardamos en el lcoal Storage*/
    localStorage.clear()
    let cartJson = JSON.stringify(cart)
    localStorage.setItem('Pedidos', cartJson)
}


//ACTUALIZACION CARRITO/FUNCIONALIDAD
let funcionalidadCarrito=()=>{
    let cantidadEnCarrito = 0;

    cart.forEach(p => cantidadEnCarrito += p.quantity);

    contadorCarrito.innerHTML = cantidadEnCarrito;

}






// FUNCION QUE TE DEVUELVE EL PRECIO TOTAL
const precioTotal = () => {
    let totalReduce = cart.reduce((acc, el) => acc + (el.price * el.quantity), 0)
    document.getElementById('tfoot').innerText = totalReduce

}



// BOTON FINALIZAR COMPRA

let buttonFinalizar = document.querySelector('.finalizarCompra')
buttonFinalizar.addEventListener('click', () => {
    if (cart.length === 0) {
        Toastify({

            text: 'CARRITO VACIO',

            duration: 2000,
            style: {
                color: 'white',
                background: 'red',
                opacity: .87
            }


        }).showToast();

    } else {
        Toastify({

            text: 'SU TOTAL ES DE:' + document.getElementById('tfoot').innerText,

            duration: 2000,
            style: {
                color: 'white',
                background: 'black',
                opacity: .87

            }


        }).showToast();
      
        cart=''
     

        // CIERRO POPUP
        document.getElementById('popup').classList.remove('active')
    }


})





//FUNCION PARA MOSTRAR EL POPUP, PARAMETRO CARRITO
const mostrarPopup = (productos) => {

    let cuerpo = document.getElementById('tbody')

    //VACIAMOS LO QUE YA EXISTE EN EL CONTENEDOR PARA ACTUALIZAR CORRECTAMENTE EL CAMBIO EN LAS CANTIDADES
    cuerpo.innerHTML = '';


    productos.forEach(product => {

        let tr = document.createElement('tr')
        tr.classList.add('tr')

        tr.innerHTML = `
              
                        <td><img  class="img-popup" ${product.img} alt="Kids-jumper"></td>
                        <td class='product-name-js'>${product.name}</td>
                        <td>${product.quantity}</td>
                        <td>US$ ${product.price}</td>
                        <td>US$ ${subtotal(product.quantity , product.price)}</td>
                        <td><button id=eliminar${product.id}><i class="fas trashButton fa-trash-alt"></i></button></td>
                       
                        
               `
        cuerpo.appendChild(tr)

        // METODO REDUCE PARA DARME EL TOTAL
        precioTotal()
    

        //BUTTON TRASH BORRAR ELEMENTOS

        let botonBorrar = document.getElementById(`eliminar${product.id}`)
        botonBorrar.addEventListener('click', () => {

            botonBorrar.parentElement.parentElement.remove()

            // LE PIDO A TRAVEZ DEL MEETODO FILTER, QUE ME TRAIGA LOS PRODUCTOS QUE NO SON IGUAL AL ID QUE APRETO
            cart = cart.filter(el => el.id != product.id) 
       
            precioTotal()
            funcionalidadCarrito(cart)

            localStorageFunction()
        })


    })

}