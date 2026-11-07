const campoContrasena = document.getElementById("login-contrasena");
const botonContrasena = document.getElementById("btn-ver-contrasena");
const iconoContrasena = botonContrasena.querySelector("img");
const recuperarContraseña = document.querySelector('#recuperar')

botonContrasena.addEventListener("click", function () {
    if (campoContrasena.type === "password") {
        campoContrasena.type = "text";
        iconoContrasena.src = "img/ojos-cruzados.png";
        botonContrasena.setAttribute("aria-label", "Ocultar contraseña");
    } else {
        campoContrasena.type = "password";
        iconoContrasena.src = "img/ojo.png";
        botonContrasena.setAttribute("aria-label", "Mostrar contraseña");
    }
});

recuperarContraseña.addEventListener('click',()=>{
    alert('se ha enviado un el correo de recuperación de la contraseña')
})

