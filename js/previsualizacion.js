let inputUsuario = document.querySelector('#usuario')
let inputCorreo = document.querySelector('#correo')
let pvUsuario = document.querySelector('#vp-usuario')
let pvCorreo = document.querySelector('#vp-correo')
let nUsuario = document.querySelector('#nombre')
let avatar = document.querySelector('#vp-avatar')

inputUsuario.addEventListener('input', function(){
    pvUsuario.textContent = inputUsuario.value;
}) 

inputCorreo.addEventListener('input', function(){
    pvCorreo.textContent = inputCorreo.value;
})

nUsuario.addEventListener('input',function(){
    
    let inicialUsuario = nUsuario.value.trim();
    
    avatar.textContent = inicialUsuario[0];
})