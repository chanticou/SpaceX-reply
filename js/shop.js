//Llamo a las cards guardadas en un Json
const arrayProductos = []

$.getJSON("../productos.json", function (datos, estado) {
    console.log(datos)
    console.log(estado)
    datos.forEach(prod => arrayProductos.push(prod))
    localStorage.setItem('stock', JSON.stringify(datos))



    mostrar(arrayProductos)

   


    agregarAcarrito();


    contadorCarrito.addEventListener('click', () => {
        containerPopup.style.transition = "all 1s";
        containerPopup.style.opacity = '.9'
  
  
    });






})