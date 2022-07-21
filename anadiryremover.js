*// addEventListener(); A;adir un escuchador*//

var boton = document.getElementById('boton');

function alerta(){
    
    alert('hola mundo');
}

boton.addEventListener('click', alerta);