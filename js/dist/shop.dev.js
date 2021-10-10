"use strict";

// const agregarAcarrito = () => {
//     buttonBuy.forEach(button => {
//         button.addEventListener('click', () => {
//             //BUSCAMOS SI EL PRODUCTO YA ESTA SELECCIONADO EN EL CARRITO
//             const existe = cart.find(producto => producto.id == button.id)
//             console.log(existe)
//             // if (existe == undefined) {
//             //     const metodoFind = arrayProductos.find(producto => producto.id == button.id)
//             //     cart.push(metodoFind)
//             //     console.log(cart)
//             // } else {
//             //     console.log(existe.agregarCantidad(1))
//             // }
//             // //Buscando con el emtodo find el producto que coincida con el button
//             // // const metodoFind = arrayProductos.find(producto => producto.id == button.id)
//             // //Pusheamos al carrito el metodo find al array carrito
//             // // cart.push(metodoFind)
//             // /*LOCAL STORAGE=> lo guardamos en el lcoal Storage*/
//             // localStorage.clear()
//             // let cartJson = JSON.stringify(cart)
//             // let local = localStorage.setItem('Pedidos', cartJson)
//             // //$('.contadorCarrito')
//             // mostrarPopup(cart)
//         })
//     })
// };
// const mostrarPopup = (productos) => {
//     // containerPopup.empty()
//     productos.forEach(product => {
//         let totalPrice = cart.length * product.price
//         contadorCarrito.addEventListener('click', () => {
//             containerPopup.innerHTML += `
//                 <button  type="button" id='closePopup' class="btn  btn-dark">X</button>   
//                 <table class="table">
//                 <tbody>
//                   <tr>
//                     <th scope="row">
//                     <td><img  class="img-popup" ${product.img} alt="Kids-jumper"></td>
//                     <td>${product.name}</td>
//                     <td>${product.cantidad}</td>
//                     <td>US$ ${product.price}</td>
//                     <td>US$ ${totalPrice}</td>
//                     <td>subtotal${product.subtotal()}</td>
//                     </th>
//                   </tr>
//                 </tbody>
//               </table>        
//                  `
//             document.getElementById('closePopup').addEventListener('click', () => {
//                 console.log(botonCerrar)
//                 containerPopup.style.transition = "all 0.2s";
//                 containerPopup.style.opacity = '0'
//             })
//         })
//     })
// }
// $(document).ready(function () {
//     contadorCarrito.addEventListener('click', () => {
//         containerPopup.style.transition = "all 1s";
//         containerPopup.style.opacity = '.9'
//     });
//     agregarAcarrito()
// })
// $('.scroll-1').click(function () {
//     $('html,body').animate({
//         scrollTop: $('.fin-scroll__footer').offset().top
//     })
// })
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
var agregarAcarrito = function agregarAcarrito() {
  //ACCESO AL DOM PARA OBTENER LOS BOTONES DE CLASE .btnCart
  var buttonBuy = document.querySelectorAll('.btnCart'); //POR CADA BOTON AÑADIMOS UN EVENTO

  buttonBuy.forEach(function (button) {
    button.addEventListener('click', function () {
      //BUSCAMOS SI EL PRODUCTO YA ESTA SELECCIONADO EN EL CARRITO
      var existe = cart.find(function (producto) {
        return producto.id == button.id;
      }); // SI EL PRODUCTO NO FUE SELECCIONADO PREVIAMENTE LA BUSQUEDA DA UNDEFINED
      //SI EL PRODUCTO NO ESTA ADENTRO DEL CARRITO, LO AGRUEGAMOS

      if (existe == undefined) {
        //BUSCAMOS EL OBJETO PRODUCTO EN EL ARRAY DE PRODUCTOS Y LO AÑADIMOS AL CARRITO
        var metodoFind = arrayProductos.find(function (producto) {
          return producto.id == button.id;
        });
        cart.push(metodoFind);
      } else {
        //SI LA BUSQUEDA RETORNA EL OBJETO EXITENTE EN EL ARRAY SUMAMOS UNA CANTIDAD
        //SI EL PRODUCTO ESTA ADENTRO DEL CARRITO LE AGRUEGAMOS UNO
        existe.agregarCantidad(1);
      } //FUNCIONALIDAD PARA SUMAR CANTIDAD TOTAL DE LOS PRODUCTOS EN BASE A LA CANTIDAD


      var cantidadEnCarrito = 0;
      cart.forEach(function (p) {
        return cantidadEnCarrito += p.cantidad;
      });
      contadorCarrito.innerHTML = cantidadEnCarrito;
      /*LOCAL STORAGE=> lo guardamos en el lcoal Storage*/

      localStorage.clear();
      var cartJson = JSON.stringify(cart);
      var local = localStorage.setItem('Pedidos', cartJson); //FUNCION PARA AÑADIR EL CONTENIDO DEL CART AL CARRITO

      mostrarPopup(cart);
    });
  });
};

var mostrarPopup = function mostrarPopup(productos) {
  //VARIABLE LOCAL PARA SUMAR EL TOTAL DE CARRITO (LA SUMA DE LOS SUBTOTALES DE CADA PRODUCTO)
  var totalCarrito = 0; //VACIAMOS LO QUE YA EXISTE EN EL CONTENEDOR PARA ACTUALIZAR CORRECTAMENTE EL CAMBIO EN LAS CANTIDADES

  containerPopup.innerHTML = '';
  productos.forEach(function (product) {
    totalCarrito += product.subtotal();
    console.log(popupRender);
    popupRender.innerHTML += "\n                  <tr>\n                        <td><img  class=\"img-popup\" ".concat(product.img, " alt=\"Kids-jumper\"></td>\n                        <td>").concat(product.name, "</td>\n                        <td>").concat(product.cantidad, "</td>\n                        <td>US$ ").concat(product.price, "</td>\n                        <td>US$ ").concat(product.subtotal(), "</td>\n                        <td>US$ ").concat(totalCarrito, "</td>\n                  </tr>\n               ");
  }); //AÑADIMOS EL TOTAL UNA VEZ FINALIZADO LA CARGA DE CADA tr

  containerPopup.innerHTML += "<h2> TOTAL ".concat(totalCarrito, " </h2> <button  type=\"button\" id='closePopup' class=\"btn  btn-dark\">X</button> "); //ASOCIAMOS EL EVENTO AL BOTON DELETE

  document.getElementById('closePopup').addEventListener('click', function () {
    containerPopup.style.transition = "all 0.2s";
    containerPopup.style.opacity = '0';
  });
};

$(document).ready(function () {
  contadorCarrito.addEventListener('click', function () {
    containerPopup.style.transition = "all 1s";
    containerPopup.style.opacity = '.9';
  });
  agregarAcarrito();
});