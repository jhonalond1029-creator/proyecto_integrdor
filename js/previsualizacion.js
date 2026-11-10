let inputUsuario = document.querySelector('#usuario')
let inputCorreo = document.querySelector('#correo')
let pvUsuario = document.querySelector('#vp-usuario')
let pvCorreo = document.querySelector('#vp-correo')
let inputNombre = document.querySelector('#nombre')
let avatar = document.querySelector('#vp-avatar')

inputUsuario.addEventListener('input', function () {
    pvUsuario.textContent = inputUsuario.value || '—';
})

inputCorreo.addEventListener('input', function () {
    pvCorreo.textContent = inputCorreo.value || '—';
})

inputNombre.addEventListener('input', function () {
    let nombre = inputNombre.value.trim();

    if (nombre) {
        avatar.textContent = nombre[0].toUpperCase();
    } else {
        avatar.textContent = '?';
    }
})