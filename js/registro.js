const formulario = document.querySelector('#form-registro')
const nombre = document.querySelector('#nombre')
const correo = document.querySelector('#correo')
const telefono = document.querySelector('#telefono')

const repassword = document.querySelector('#repassword')
const password = document.querySelector('#password')
const usuario = document.querySelector('#usuario')

formulario.addEventListener('submit', function (event){
    event.preventDefault();

    nombre = nombre.value.trim();
    correo = correo.value.trim();
    telefono = telefono.value.trim();
    
    password = password.value;
    repassword = repassword.value;
    usuario = usuario.value.trim();

    //validar password y repasword
    if(password != repassword){
        alert('la contraseña no coincide');
    }
    const newUsuarion = {

    }




} )