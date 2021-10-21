"use strict";

$.getJSON("../productos.json", function (datos, estado) {
  console.log(datos);
  console.log(estado);
  datos.forEach(function (prod) {
    return arrayProductos.push(prod);
  });
  localStorage.setItem('stock', JSON.stringify(datos));
  mostrar(arrayProductos);
});
var containerPopup = document.querySelector('.container-popup');
var containerCards = document.querySelector('.content-cards');

var mostrar = function mostrar(array) {
  console.log(array);
  array.forEach(function (producto) {
    containerCards.innerHTML += "\n        <div class='content-card'>\n    <div class=\"card\">\n    <img  ".concat(producto.img, " class=\"card-img-top\" alt=\"Kids-jumper\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">").concat(producto.name, "</h5>\n      <h3 class='precio'>Price:US$ ").concat(producto.price, "</h3>\n      <button id=").concat(producto.id, "  type=\"button\"  class=\"btn btnCart btn-dark\">BUY</button>\n    </div>\n  </div>\n  </div>\n        ");
  });
};

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
      var local = localStorage.setItem('Pedidos', cartJson);
      console.log(local); //FUNCION PARA AÑADIR EL CONTENIDO DEL CART AL CARRITO

      mostrarPopup(cart);
      console.log(cart);
    });
  });
};

var mostrarPopup = function mostrarPopup(productos) {
  //VARIABLE LOCAL PARA SUMAR EL TOTAL DE CARRITO (LA SUMA DE LOS SUBTOTALES DE CADA PRODUCTO)
  var totalCarrito = 0; //VACIAMOS LO QUE YA EXISTE EN EL CONTENEDOR PARA ACTUALIZAR CORRECTAMENTE EL CAMBIO EN LAS CANTIDADES

  containerPopup.innerHTML = ''; //ESCRIBIMOS ESTATICA LA TABLA DESDE JS

  containerPopup.innerHTML = "          \n     <thead class='thead'>\n    <tr class='tr'>\n    <button  type=\"button\" id='closePopup' class=\"btn  btn-dark\">X</button> \n        <th scope=\"col\">PRODUCT</th>\n        <th scope=\"col\">DESCRIPTION</th>\n        <th scope=\"col\">QUANTITY</th>\n        <th scope=\"col\">PRICE</th>\n        <th scope=\"col\">SUBTOTAL</th>\n        <th scope=\"col\">TOTAL</th>\n    </tr>\n</thead>\n<tbody id='tbody'></tbody>\n\n<tfoot>Total:US$<span id='tfoot'></span></tfoot>\n";
  productos.forEach(function (product) {
    var cuerpo = document.getElementById('tbody');
    totalCarrito += product.subtotal();
    cuerpo.innerHTML += "\n           \n                  <tr class='tr'>\n                 \n                        <td><img  class=\"img-popup\" ".concat(product.img, " alt=\"Kids-jumper\"></td>\n                        <td class='product-name-js'>").concat(product.name, "</td>\n                        <td>").concat(product.cantidad, "</td>\n                        <td>US$ ").concat(product.price, "</td>\n                        <td>US$ ").concat(product.subtotal(), "</td>\n                        <td>Total:</td>\n                        <td><button><i class=\"fas fa-trash-alt\"></i></button>\n                  </tr>\n               "); // METODO REDUCE

    var totalReduce = cart.reduce(function (acc, el) {
      return acc + el.price * el.cantidad;
    }, 0);
    document.getElementById('tfoot').innerText = totalReduce; // containerPopup.innerHTML=`<tfoot>${totalReduce}</tfoot>`
  }); //after diez emiliano
  //AÑADIMOS EL TOTAL UNA VEZ FINALIZADO LA CARGA DE CADA tr
  //    containerPopup.innerHTML += `<h2> TOTAL ${totalCarrito} </h2> `
  //ASOCIAMOS EL EVENTO AL BOTON DELETE

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
}); // ANIMACIONES CON JQUERY

$('.scroll-1').click(function () {
  $('html,body').animate({
    scrollTop: $('.fin-scroll__footer').offset().top
  }, 2000);
});
$('.shop-space').animate({
  fontSize: '100px',
  opacity: .8
}, 3000); // TOGGLE

$('.toggle').on('click', function () {
  $('.cohete');
});
$('.toggle').on('click', function () {
  $('.cohete').slideDown(3000).slideUp(3000);
});