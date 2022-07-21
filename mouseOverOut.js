var parrafo = document.getElementsByClassName('texto')[0];

//Evento mouseover

parrafo.addEventListener('mouseover',function(){
    
    var nuevoParrafo = document.createElement('p');
   
    var textoNuevo = document.createTextNode('hola, soy un nuevo texto');

    nuevoParrafo.appendChild(textoNuevo);
    
    
    nuevoParrafo.setAttribute('class','texto');
    
    nuevoParrafo.id = 'parrafoAgregado';
   
    var contenedor = document.getElementsByClassName('contenedor')[0];
   
    contenedor.appendChild(nuevoParrafo);

});

// Evento mouseout

parrafo.addEventListener('mouseout', function(){
    
    var parrafoAgregado = document.getElementById('parrafoAgregado');

    var contenedor = document.getElementsByClassName('contenedor')[0];

    contenedor.removeChild(parrafoAgregado);
});