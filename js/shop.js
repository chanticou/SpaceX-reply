//Llamo a las cards guardadas en un Json
const arrayProductos = []

$.getJSON("../productos.json", function (datos, estado) {
    console.log(datos)
    console.log(estado)
    datos.forEach(prod => arrayProductos.push(prod))
    localStorage.setItem('stock', JSON.stringify(datos))



    renderCards(arrayProductos)




    // agregarAcarrito();


    // contadorCarrito.addEventListener('click', () => {

    //     // containerPopup.style.transition = "all 1s";
    //     // containerPopup.style.opacity = '.9';
    //     // containerPopup.classList.add('active')
    //     document.getElementById('popup').classList.toggle('active');
    //     // containerPopup.style.display = "block";

    // });



    document.querySelector('.container-cart').addEventListener('click',()=>{
        document.getElementById('popup').classList.add('active')
    })
    document.querySelector('#closePopup').addEventListener('click',()=>{
        document.getElementById('popup').classList.remove('active')
    })


})