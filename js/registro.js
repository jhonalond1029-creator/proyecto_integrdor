const formulario = document.querySelector('#form-registro')
const nombre = document.querySelector('#nombre')
const correo = document.querySelector('#correo')
const telefono = document.querySelector('#telefono')

const repassword = document.querySelector('#repassword')
const password = document.querySelector('#password')
const usuario = document.querySelector('#usuario')

formulario.addEventListener('submit', function (event) {
    event.preventDefault();



    //validar password y repasword
    if (password.value !== repassword.value) {
        alert('la contraseña no coincide');
        return
    }

    let usuarios = JSON.parse(localStorage.getItem('usuarios'))
    if (usuarios === null) {
        usuarios = []
    }

    let correoExiste = false
    let usuarioExiste = false

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].correo === correo.value) {
            correoExiste = true
        }
        if (usuarios[i].usuario === usuario.value) {
            usuarioExiste = true
        }
    }
    if (correoExiste === true) {
        alert('Ese correo ya está registrado')
        return
    }
    if (usuarioExiste === true) {
        alert('Ese usuario ya existe')
        return
    }


    const newUsuario = {
        nombre: nombre.value.trim(),
        correo: correo.value.trim(),
        telefono: telefono.value.trim(),
        password: password.value,
        usuario: usuario.value.trim()
    }

    usuarios.push(newUsuario)
    localStorage.setItem('usuarios', JSON.stringify(usuarios))

    alert('¡Registro exitoso!')
    formulario.reset()
})