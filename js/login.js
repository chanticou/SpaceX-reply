/*Simulacro base de datos de usuarios
let usuarios = [{
        id: '4715',
        email: 'Portobello@gmail.com',
        password: 848402,
    },
    {
        id: '9572',
        email: 'Filarmonica@gmial.com',
        password: 461946,
    },
    {
        id: '8452',
        email: 'Roballos@hotmail.com',
        password: 849102,
    },
    {
        id: '4510',
        email: 'Daniel@gmail.com',
        password: 870628,
    },
    {
        id: '2501',
        email: 'Monardi@gmail.com',
        password: 984697,
    }
]

let form = document.querySelector('.form')
let password = document.querySelector('.password')
let mail =document.querySelector('.email')




class Usuario {
    constructor(mail, password) {
        this.email = mail.value
        this.contraseña = password.value
    }

}
 

form.addEventListener('submit', e => {
    e.preventDefault()
    usuarios.push(new Usuario(mail, password))
        console.log('ARRAY DE USUARIOS:',usuarios)

})


const arrayParaOrdenar=[5,897,5,2,8,,8,4,7,5,7,8,]


console.log(arrayParaOrdenar.sort())*/