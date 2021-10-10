// const buyButtonClickEvent = () => {
//     //Buscando con el emtodo find el producto que coincida con el button
//     const metodoFind = arrayProductos.find(producto => producto.id == button.id)
//     //Pusheamos al carrito el metodo find al array carrito
//     //Sumamos +1 al carrito
//     contadorCarrito.innerHTML = cart.length
//     /*LOCAL STORAGE=> lo guardamos en el lcoal Storage*/
//     localStorage.clear()
//     let cartJson = JSON.stringify(cart)
//     let local = localStorage.setItem('Pedidos', cartJson)
//     //$('.contadorCarrito')
//     mostrarPopup(cart)
// }
// const renderPopup=()=>{
//     containerPopup.append += `
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
// document.getElementById('closePopup').addEventListener('click', () => {
//     console.log(botonCerrar)
//     containerPopup.style.transition = "all 0.2s";
//     containerPopup.style.opacity = '0'
// })
// }
// const clickProduct = () => {
//     buttonBuy.forEach(button => {
//         //Buscando con el emtodo find el producto que coincida con el button
//         const metodoFind = arrayProductos.find(producto => producto.id == button.id)
//         if (metodoFind == 'undefined') {
//             cart.push(metodoFind)
//         }
//         //Pusheamos al carrito el metodo find al array carrito
//         //Sumamos +1 al carrito
//         contadorCarrito.innerHTML = cart.length
//         /*LOCAL STORAGE=> lo guardamos en el lcoal Storage*/
//         localStorage.clear()
//         let cartJson = JSON.stringify(cart)
//         let local = localStorage.setItem('Pedidos', cartJson)
//         //$('.contadorCarrito')
//         mostrarPopup(cart)
//         console.log(cart)
//     })
// }
// const mostrarPopup = (productos) => {
//     productos.forEach(product => {
//         let totalPrice = cart.length * product.price
//         contadorCarrito.addEventListener('click', clickContenidoPopup)
//     })
// }
// const clickContenidoPopup = () => {
//     renderTable()
//     document.getElementById('closePopup').addEventListener('click', () => {
//         console.log(botonCerrar)
//         containerPopup.style.transition = "all 0.2s";
//         containerPopup.style.opacity = '0'
//     })
// }
"use strict";