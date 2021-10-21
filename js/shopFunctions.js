//Funtion quantity
let subtotal = (quantity, price) => {
    return quantity * price
}



//MOSTRAR (le paso como parametro el array de productos que le pido en mi json)
let mostrar = (array) => {

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
    })

}




//function AGREGAR AL CARRITO
let agregarAcarrito = () => {
    //ACCESO AL DOM PARA OBTENER LOS BOTONES DE CLASE .btnCart
    const buttonBuy = document.querySelectorAll('.btnCart')

    //POR CADA BOTON AÑADIMOS UN EVENTO
    buttonBuy.forEach(button => {
        button.addEventListener('click', () => {
    
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

            /*LOCAL STORAGE=> lo guardamos en el lcoal Storage*/
            localStorage.clear()
            let cartJson = JSON.stringify(cart)
            localStorage.setItem('Pedidos', cartJson)

            //FUNCION PARA MOSTRAR EL POPUP, LE PASAMOS COMO PARAMETRO EL ARRAY DEL CARRITO
            mostrarPopup(cart)

        })

    })

};




//FUNCION PARA MOSTRAR EL POPUP, PARAMETRO CARRITO
const mostrarPopup = (productos) => {

    //VACIAMOS LO QUE YA EXISTE EN EL CONTENEDOR PARA ACTUALIZAR CORRECTAMENTE EL CAMBIO EN LAS CANTIDADES
    containerPopup.innerHTML = '';

    //RENDERIZAMOS ESTATICA LA TABLA DESDE JS
    containerPopup.innerHTML = `          
        <thead class='thead'>
        <tr class='tr'>
        <button  type="button" id='closePopup' class="btn  btn-dark">X</button> 
            <th scope="col">PRODUCT</th>
            <th scope="col">DESCRIPTION</th>
            <th scope="col">QUANTITY</th>
            <th scope="col">PRICE</th>
            <th scope="col">SUBTOTAL</th>

            <th scope="col"></th>
        </tr>
        </thead>
        <tbody id='tbody'></tbody>

        <tfoot>Total:<span id='tfoot'></span></tfoot>
        `
    productos.forEach(product => {
        let cuerpo = document.getElementById('tbody')


        cuerpo.innerHTML += `
           
                  <tr class='tr'>
                 
                        <td><img  class="img-popup" ${product.img} alt="Kids-jumper"></td>
                        <td class='product-name-js'>${product.name}</td>
                        <td>${product.quantity}</td>
                        <td>US$ ${product.price}</td>
                        <td>US$ ${subtotal(product.quantity , product.price)}</td>
                        
                        <td><button><i class="fas trashButton fa-trash-alt"></i></button>
                  </tr>
               `

        // METODO REDUCE PARA DARME EL TOTAL
        let totalReduce = cart.reduce((acc, el) => acc + (el.price * el.quantity), 0)
        document.getElementById('tfoot').innerText = totalReduce
        // containerPopup.innerHTML=`<tfoot>${totalReduce}</tfoot>`

    })



    //after diez emiliano

    //    containerPopup.innerHTML += `<h2> TOTAL ${totalCarrito} </h2> `
    //ASOCIAMOS EL EVENTO AL BOTON DELETE
    document.getElementById('closePopup').addEventListener('click', () => {
        containerPopup.style.transition = "all 0.2s";
        containerPopup.style.opacity = '0'
    })



    let trashButton = document.querySelectorAll('.trashButton')
    trashButton.forEach(trash => {
        trash.addEventListener('click',()=>{
            console.log('clicikTRAAAASH')
        })
    })



}



