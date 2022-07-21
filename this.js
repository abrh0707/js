var parrafos = document.getElementsByClassName('texto');

for( var i = 0; i< parrafos.length; i++){

    parrafos[i].addEventListener('click',function(){
        this.className = 'texto fondo-rojo';
    });
}

//developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/this
