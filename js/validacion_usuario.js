const maxIntentos = 3;
let intentos = 0;

const formLogin = document.getElementById("form-login");
const inputUsuario = document.querySelector('#login-usuario')
const inputContrasena = document.getElementById("login-contrasena");
const btnVerContrasena = document.getElementById("btn-ver-contrasena");
const btnLogin = document.getElementById("btn-login");
const mensaje = document.getElementById("login-mensaje");

formLogin.addEventListener('submit', function (e) {
    e.preventDefault();

    let usuario = inputUsuario.value.trim();
    let contrasena = inputContrasena.value;

    mensaje.textContent = '';
    if (usuario === '' || contrasena === '') {
        alert('todos los campos son abligatorios')
        mensaje.textContent = "todos los campos son obligatorios"
        return;
    }

    let encontrado;
    if (encontrado) {
        alert("bienvenido ingreso exitoso")
        intentos = 0

    } else {
        intentos++;

        let restantes = maxIntentos - intentos;
        if (intentos >= maxIntentos) {
            alert("has superado el numero de intentos")

        } else {
            alert("usuario o contraseña incorrectos");
            mensaje.textContent = "dato incorrecto"
            inputContrasena.value = ""
            inputContrasena.focus()
        }

    }


})