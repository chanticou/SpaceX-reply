


//mostrarPopup()
/*busqueda

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let input = document.querySelector('.form-control').value
    choise(input)

})

//busqueda
let choise = (input) => {
    if (input == array[1].name) {
        cart.push(array[1].name)

    }
}
*/
























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
                existe.agregarCantidad(1)
            }

            //FUNCIONALIDAD PARA SUMAR CANTIDAD TOTAL DE LOS PRODUCTOS EN BASE A LA CANTIDAD
            let cantidadEnCarrito = 0;
            cart.forEach(p => cantidadEnCarrito += p.cantidad);

            contadorCarrito.innerHTML = cantidadEnCarrito;

            /*LOCAL STORAGE=> lo guardamos en el lcoal Storage*/
            localStorage.clear()
            let cartJson = JSON.stringify(cart)
            let local = localStorage.setItem('Pedidos', cartJson)
            //FUNCION PARA AÑADIR EL CONTENIDO DEL CART AL CARRITO
            mostrarPopup(cart)
            console.log(cart)
        })

    })

};

const mostrarPopup = (productos) => {

    //VARIABLE LOCAL PARA SUMAR EL TOTAL DE CARRITO (LA SUMA DE LOS SUBTOTALES DE CADA PRODUCTO)
    let totalCarrito = 0;
    //VACIAMOS LO QUE YA EXISTE EN EL CONTENEDOR PARA ACTUALIZAR CORRECTAMENTE EL CAMBIO EN LAS CANTIDADES
    containerPopup.innerHTML = '';
    //ESCRIBIMOS ESTATICA LA TABLA DESDE JS
    containerPopup.innerHTML = `          
     <thead class='thead'>
    <tr class='tr'>
    <button  type="button" id='closePopup' class="btn  btn-dark">X</button> 
        <th scope="col">PRODUCT</th>
        <th scope="col">DESCRIPTION</th>
        <th scope="col">QUANTITY</th>
        <th scope="col">PRICE</th>
        <th scope="col">SUBTOTAL</th>
        <th scope="col">TOTAL</th>
    </tr>
</thead>
<tbody id='tbody'></tbody>

<tfoot>Total:US$<span id='tfoot'></span></tfoot>
`
    productos.forEach(product => {
        let cuerpo=document.getElementById('tbody')

        totalCarrito += product.subtotal();

        cuerpo.innerHTML += `
           
                  <tr class='tr'>
                 
                        <td><img  class="img-popup" ${product.img} alt="Kids-jumper"></td>
                        <td class='product-name-js'>${product.name}</td>
                        <td>${product.cantidad}</td>
                        <td>US$ ${product.price}</td>
                        <td>US$ ${product.subtotal()}</td>
                        <td>Total:</td>
                        <td><button><i class="fas fa-trash-alt"></i></button>
                  </tr>
               `


               
    // METODO REDUCE
     let totalReduce=cart.reduce((acc,el)=>acc + (el.price * el.cantidad)  , 0)
     document.getElementById('tfoot').innerText=totalReduce
    // containerPopup.innerHTML=`<tfoot>${totalReduce}</tfoot>`
               
    })
//after diez emiliano


    //AÑADIMOS EL TOTAL UNA VEZ FINALIZADO LA CARGA DE CADA tr
    //    containerPopup.innerHTML += `<h2> TOTAL ${totalCarrito} </h2> `
    //ASOCIAMOS EL EVENTO AL BOTON DELETE
    document.getElementById('closePopup').addEventListener('click', () => {
        containerPopup.style.transition = "all 0.2s";
        containerPopup.style.opacity = '0'
    })
}

$(document).ready(function () {

    contadorCarrito.addEventListener('click', () => {
        containerPopup.style.transition = "all 1s";
        containerPopup.style.opacity = '.9'

    });
    agregarAcarrito();
})






$('.scroll-1').click(function () {

    $('html,body').animate({
        scrollTop: $('.fin-scroll__footer').offset().top
    },2000)
})

