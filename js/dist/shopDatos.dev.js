"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//clase
var Productos =
/*#__PURE__*/
function () {
  function Productos(name, price, id, img) {
    _classCallCheck(this, Productos);

    this.name = name, this.price = price, this.id = id, this.img = img, this.cantidad = 1;
  }

  _createClass(Productos, [{
    key: "agregarCantidad",
    value: function agregarCantidad(valor) {
      this.cantidad += valor;
    }
  }, {
    key: "subtotal",
    value: function subtotal() {
      return this.cantidad * this.price;
    }
  }]);

  return Productos;
}();

var arrayProductos = [new Productos('KID JUMPER', 45, 1, 'src=../img/kids-jumper.png'), new Productos('KIDS STARTMAN<br> HOODIE BLACK', 25, 2, 'src=../img/KIDS_STARMAN_HOODIE_BLACK_FRONT_400x.png'), new Productos('MENS STARMAN<br> BLACK', 40, 3, 'src=../img/MENS-starman-black-FRONT_0414b62c-7de5-4a9d-916b-05a86976fa63_400x.png'), new Productos('UNISEX DRAGON<br> ZIPPER ', 27, 4, 'src=../img/UNISEX_DRAGON_ZIPPER_SMARTEX_GRAY_BACK_400x.png'), new Productos('UNISEX SPACEX <br>PULLOVER NAVY', 77, 5, 'src=../img/UNISEX_SPACEX_PULLOVER_NAVY_BACK_400x.png'), new Productos('UNISEX SPACEX<br> SWEATSHIRT', 92, 6, 'src=../img/UNISEX_SPACEX_SWEATSHIRT_ROYAL_BLUE_FRONT-4952_400x.png'), new Productos('WOMENS BOMBER<br> JACKET BLACK', 56, 7, 'src=../img/WOMENS_BOMBER_JACKET_BLACK_FRONT_400x.png'), new Productos('UNISEX MOTO<br> JAKET BLACK', 150, 8, 'src=../img/UNISEX_MOTO_JACKET_BLACK_FRONT-V2_400x.png')];