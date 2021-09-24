//clase
class Productos {
    constructor(name, price, id, img) {
        this.name = name,
            this.price = price,
            this.id = id,
            this.img=img
    }


}


const arrayProductos = [
    new Productos('KID JUMPER', 45, 1, 'src=../img/kids-jumper.png'),
    new Productos('KIDS STARTMAN HOODIE BLACK', 25, 2, 'src=../img/KIDS_STARMAN_HOODIE_BLACK_FRONT_400x.png' ),
    new Productos('MENS STARMAN BLACK', 40, 3, 'src=../img/MENS-starman-black-FRONT_0414b62c-7de5-4a9d-916b-05a86976fa63_400x.png'),
    new Productos('UNISEX DRAGON ZIPPER ', 27, 4, 'src=../img/UNISEX_DRAGON_ZIPPER_SMARTEX_GRAY_BACK_400x.png'),
    new Productos('UNISEX SPACEX PULLOVER NAVY', 77, 5, 'src=../img/UNISEX_SPACEX_PULLOVER_NAVY_BACK_400x.png'),
    new Productos('UNISEX SPACEX SWEATSHIRT', 92, 6, 'src=../img/UNISEX_SPACEX_SWEATSHIRT_ROYAL_BLUE_FRONT-4952_400x.png'),
    new Productos('WOMENS BOMBER JACKET BLACK', 56, 6, 'src=../img/WOMENS_BOMBER_JACKET_BLACK_FRONT_400x.png'),
    new Productos('UNISEX MOTO JAKET BLACK', 150, 7, 'src=../img/UNISEX_MOTO_JACKET_BLACK_FRONT-V2_400x.png')
];

console.log(arrayProductos)


//recorriendo productos
let contentCards = document.querySelector('.content-cards')

arrayProductos.forEach(producto => {
    contentCards.innerHTML += `<div class="content-card">
    <div class="card">
        <img class='img' ${producto.img} class="card-img-top" alt="Kids-jumper">
        <div class="card-body">
            <h2 class="card-title">${producto.name}</h2>
            <h3 class='precio'>Price:US$ ${producto.price}</h3>
            <button id=${producto.id}  type="button"  class="btn btnCart btn-dark">ADD TO CART</button>
        </div>
    </div>
    </div>
    `

})



const cart = []
const containerPopup = document.querySelector('.container-popup')

//MOSTRANDO EN EL POPUP
arrayProductos.forEach(producto => {
    containerPopup.innerHTML = `
    <h2 class="card-title">${producto.name}</h2>
    <h3>Price:US$ ${producto.price}</h3>
        `
})
//FIN MOSTRAR POPUP

//
//Iterando los buttons
const buttonBuy = document.querySelectorAll('.btnCart')



//contador
let contador = 0
buttonBuy.forEach(button => {
    button.addEventListener('click', () => {
        contador++
        const metodoFind = arrayProductos.find(producto => producto.id == button.id)

        total(contador, metodoFind)
        // console.log(contador)
    })

});

//TOTAL
let total = (contador, metodoFind) => {
    let totalPrice = contador * metodoFind.price
    let guardarTotal = []
    guardarTotal.push(totalPrice)
    console.log(guardarTotal)
    popup(metodoFind, contador, guardarTotal)
}

//POPUP QUE APARECE CUANDO AÑADO UN ELEMENTO AL CARRITO
let popup = (metodoFind, contador, guardarTotal) => {

    containerPopup.style.transition = "all 1s";
    containerPopup.style.opacity = '.8'

    containerPopup.innerHTML = `
                                <div class='popupInside'>
                                 <h2 class='popupInside'>Product: ${metodoFind.name}</h2>
                                <h2>Quantity: ${contador}</h2>
                                <h2>Price: ${metodoFind.price}</h2>
                                <h2>Total:${guardarTotal} </h2>
                                </div>

                                `

}



















//busqueda
let form = document.querySelector('.form')

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


/*
let choise = () => {
    let option = Number(prompt('1-Kids spacex || 2-Orbit remera || 3- Buxo spaceOdity || 4-Mision remera alrga'))
    if (option === array[1].id) {
        cart.push(array[1].name)
        alert('Kids spacex')
        console.log(cart)
    } else if (option === array[2].id) {
        cart.push(array[2].name)
        alert('Orbit remera')
        console.log(cart)
    } else if (option === array[3].id) {
        cart.push(array[3].name)
        alert('Buxo spaceOdity')
        console.log(cart)
    } else if (option === array[4].id) {
        cart.push(array[4].name)
        alert('Mision remera larga')
        console.log(cart)
    } else {
        alert('Numero no valido')
    }

}
choise()

let busqueda=()=>{
    let SearchUser=prompt('Que producto buscas:')
    const busqueda = array.find(producto => producto.name === SearchUser)
    console.log(busqueda)

}

busqueda()
*/
/*

const btnsBuy = document.querySelectorAll('.btn')


btnsBuy.forEach(btn => {
    btn.addEventListener('click', (e) => {
        console.log(e.target)
    })
})*/