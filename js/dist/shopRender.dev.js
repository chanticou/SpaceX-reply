"use strict";

arrayProductos.forEach(function (producto) {
  contentCards.innerHTML += "<div class='content-card'>\n    <div class=\"card\">\n    <img  ".concat(producto.img, " class=\"card-img-top\" alt=\"Kids-jumper\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">").concat(producto.name, "</h5>\n      <h3 class='precio'>Price:US$ ").concat(producto.price, "</h3>\n      <button id=").concat(producto.id, "  type=\"button\"  class=\"btn btnCart btn-dark\">BUY</button>\n    </div>\n  </div>\n  </div>");
});
containerPopup.innerHTML = "\n<table class=\"table\">\n<thead>\n  <tr>\n    <th scope=\"col\">PROUCTS</th>\n    <th scope=\"col\">DESCRIPTION</th>\n    <th scope=\"col\">QUANTITY</th>\n    <th scope=\"col\">PRICE</th>\n    <th scope=\"col\">TOTAL PRICE</th>\n  </tr>\n</thead>";

var renderTable = function renderTable() {
  containerPopup.innerHTML += "\n    <button  type=\"button\" id='closePopup' class=\"btn  btn-dark\">X</button>   \n    <table class=\"table\">\n    <tbody>\n      <tr>\n        <th scope=\"row\">\n\n        <td><img  class=\"img-popup\" ".concat(product.img, " alt=\"Kids-jumper\"></td>\n        <td>").concat(product.name, "</td>\n        \n        <td>US$ ").concat(product.price, "</td>\n        <td>US$ ").concat(totalPrice, "</td>\n        </th>\n      </tr>\n     \n    </tbody>\n  </table>        \n\n     ");
};