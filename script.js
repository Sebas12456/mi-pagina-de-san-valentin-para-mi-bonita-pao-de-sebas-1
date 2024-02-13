// script.js
function responder(respuesta) {
    const contenedorRespuesta = document.getElementById('respuestaSi');
    if (respuesta === 'si') {
        contenedorRespuesta.style.display = 'block';
    } else {
        alert('No me digas eso :C');
        contenedorRespuesta.style.display = 'none';
    }
}
