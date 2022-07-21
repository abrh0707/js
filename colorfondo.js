var parrafos = document.getElementsByClassName('texto'),
rojo = document.getElementById('rojo'),
azul = document.getElementById('azul'),
verde = document.getElementById('verde'),
bgnegro = document.getElementById('bgnegro'),
bgamarillo = document.getElementById('bgamarillo');

rojo.addEventListener('click',function(e){

    for(var i = 0; i< parrafos.length; i++){
        parrafos[i].style.color = 'red';


    }
    
});
azul.addEventListener('click',function(e){

    for(var i = 0; i< parrafos.length; i++){
        parrafos[i].style.color = 'blue';


    }
    
});
verde.addEventListener('click',function(e){

    for(var i = 0; i< parrafos.length; i++){
        parrafos[i].style.color = 'green';


    }
    
});
bgnegro.addEventListener('click',function(e){

    for(var i = 0; i< parrafos.length; i++){
        parrafos[i].style.background = 'black';


    }
    
});
bgamarillo.addEventListener('click',function(e){

    for(var i = 0; i< parrafos.length; i++){
        parrafos[i].style.background = 'yellow';


    }
    
});