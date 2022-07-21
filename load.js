window.addEventListener('load', function(){

function elegirColor(){
    var estadoActivador = document.getElementById('colorFavorito').checked;
    if(estadoActivador == true){
        document.getElementById('verde').disabled = false;
        document.getElementById('azul').disabled = false;
        document.getElementById('otro').disable = false;

    }else{
        document.getElementById('verde').disable = true;
        document.getElementById('azul').disable = true;
        document.getElementById('otro').disable= true;

    }
}

}); 

// Evento change

var inputColorFavorito = document.getElementById('colorFavorito');

inputColorFavorito.addEventListener('change',elegirColor);




