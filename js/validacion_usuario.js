const maxIntentos = 3;
let intentos = 0;

const formLogin = document.getElementById("form-login");
const inputUsuario = document.querySelector('#login-usuario')
const inputContrasena = document.getElementById("login-contrasena");
const btnVerContrasena = document.getElementById("btn-ver-contrasena");
const btnLogin = document.getElementById("btn-login");
const mensaje = document.getElementById("login-mensaje");

formLogin.addEventListener('submit',function(e){
    e.preventDefault();
    
    let usuario = inputUsuario.value.trim();
    let contrasena = inputContrasena.value;

    mensaje.textContent = '';
    if(usuario === '' || contrasena === ''){
        alert('todos los campos son abligatorios')
     return;   
    }

})