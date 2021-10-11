"use strict";

arrayProductos.forEach(function (producto) {
  contentCards.innerHTML += "<div class='content-card'>\n    <div class=\"card\">\n    <img  ".concat(producto.img, " class=\"card-img-top\" alt=\"Kids-jumper\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">").concat(producto.name, "</h5>\n      <h3 class='precio'>Price:US$ ").concat(producto.price, "</h3>\n      <button id=").concat(producto.id, "  type=\"button\"  class=\"btn btnCart btn-dark\">BUY</button>\n    </div>\n  </div>\n  </div>");
}); // containerPopup.innerHTML=`
// <table class="table">
// <thead>
//   <tr>
//     <th scope="col">PROUCTS</th>
//     <th scope="col">DESCRIPTION</th>
//     <th scope="col">QUANTITY</th>
//     <th scope="col">PRICE</th>
//     <th scope="col">TOTAL PRICE</th>
//   </tr>
// </thead>`
// const renderTable=()=>{
//     containerPopup.innerHTML += `
//     <button  type="button" id='closePopup' class="btn  btn-dark">X</button>   
//     <table class="table">
//     <tbody>
//       <tr>
//         <th scope="row">
//         <td><img  class="img-popup" ${product.img} alt="Kids-jumper"></td>
//         <td>${product.name}</td>
//         <td>US$ ${product.price}</td>
//         <td>US$ ${totalPrice}</td>
//         </th>
//       </tr>
//     </tbody>
//   </table>        
//      `
// }