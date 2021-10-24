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


//LOCAL STORAGE FUNCTION
const localStorageFunction=()=>{

    /*LOCAL STORAGE=> lo guardamos en el lcoal Storage*/
    localStorage.clear()
    let cartJson = JSON.stringify(cart)
    localStorage.setItem('Pedidos', cartJson)
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
    let cantidadEnCarrito = 0;

    cart.forEach(p => cantidadEnCarrito += p.quantity);

    contadorCarrito.innerHTML = cantidadEnCarrito;

    localStorageFunction()

    //FUNCION PARA MOSTRAR EL POPUP, LE PASAMOS COMO PARAMETRO EL ARRAY DEL CARRITO
    mostrarPopup(cart)

};

const precioTotal=()=>{
    let totalReduce = cart.reduce((acc, el) => acc + (el.price * el.quantity), 0)
    document.getElementById('tfoot').innerText = totalReduce
}













//FUNCION PARA MOSTRAR EL POPUP, PARAMETRO CARRITO
const mostrarPopup = (productos) => {

    let cuerpo = document.getElementById('tbody')
    console.log(cuerpo)
    //VACIAMOS LO QUE YA EXISTE EN EL CONTENEDOR PARA ACTUALIZAR CORRECTAMENTE EL CAMBIO EN LAS CANTIDADES
    cuerpo.innerHTML = '';

    //RENDERIZAMOS ESTATICA LA TABLA DESDE JS
    // containerPopup.innerHTML = `          
    //     <thead class='thead'>
    //     <tr class='tr'>
    //     <button  type="button" id='closePopup' class="btn  btn-dark">X</button> 
    //         <th scope="col">PRODUCT</th>
    //         <th scope="col">DESCRIPTION</th>
    //         <th scope="col">QUANTITY</th>
    //         <th scope="col">PRICE</th>
    //         <th scope="col">SUBTOTAL</th>

    //         <th scope="col"></th>
    //     </tr>
    //     </thead>
    //     <tbody id='tbody'></tbody>
        

    //     <tfoot>Total:<span id='tfoot'></span></tfoot>
    //     `

    
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

        // containerPopup.innerHTML=`<tfoot>${totalReduce}</tfoot>`



        //BUTTON TRASH BORRAR ELEMENTOS
 
        let botonBorrar = document.getElementById(`eliminar${product.id}`)
        botonBorrar.addEventListener('click',()=>{

            botonBorrar.parentElement.parentElement.remove()
            
        })

        // botonBorrar.addEventListener('click', () => {
        //     console.log(botonBorrar)
        // })
    })







    //after diez emiliano

    //    containerPopup.innerHTML += `<h2> TOTAL ${totalCarrito} </h2> `
    //ASOCIAMOS EL EVENTO AL BOTON DELETE
    // document.getElementById('closePopup').addEventListener('click', () => {
    //     containerPopup.style.transition = "all 0.2s";
    //     containerPopup.style.opacity = '0'
    // })





}