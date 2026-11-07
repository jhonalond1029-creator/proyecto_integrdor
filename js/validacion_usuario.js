usuario = "";
let contrasena = "";
let intentos = 0;
const maxIntentos = 3;

const formLogin = document.getElementById("form-login");
const inputUsuario = document.getElementById("login-usuario");
const inputContrasena = document.getElementById("login-contrasena");
const btnVerContrasena = document.getElementById("btn-ver-contrasena");
const btnLogin = document.getElementById("btn-login");
const mensaje = document.getElementById("login-mensaje");

formLogin.addEventListener('submit',function(e){
    e.preventDefault();
    
    usuario = inputUsuario

})