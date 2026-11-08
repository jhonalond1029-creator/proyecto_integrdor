const maxIntentos = 3;
let intentos = 0;

const formLogin = document.getElementById("form-login");
const inputUsuario = document.querySelector('#login-usuario');
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
        mensaje.textContent = "Todos los campos son obligatorios";
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem('usuarios'));
    if (usuarios === null) {
        usuarios = [];
    }

    // 3. Buscar una coincidencia, ficha por ficha
    let encontrado = false;

    for (let i = 0; i < usuarios.length; i++) {
        let coincideUsuario = usuarios[i].usuario === usuario;
        let coincideClave = usuarios[i].password === contrasena;

        if (coincideUsuario && coincideClave) {
            encontrado = true;
        }
    }

   
    if (encontrado) {
        alert("Bienvenido, ingreso exitoso");
        intentos = 0;
        // window.location.href = "index.html";  

        
    } else {
        intentos++;
        let restantes = maxIntentos - intentos;

        if (intentos >= maxIntentos) {
            alert("Has superado el número de intentos");
            mensaje.textContent = "Acceso bloqueado";
            inputUsuario.disabled = true;
            inputContrasena.disabled = true;
            btnLogin.disabled = true;
        } else {
            mensaje.textContent = `Usuario o contraseña incorrectos. Te quedan ${restantes} intentos`;
            inputContrasena.value = "";
            inputContrasena.focus();
        }
    }
});