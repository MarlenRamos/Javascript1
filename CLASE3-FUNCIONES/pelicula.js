
function nombre_pelicula(obj){
    if(obj!=''){
        document.getElementById("charPeli").innerHTML= 'El nombre de la película es: ' + obj.value;
    }
    if(obj.value.length==0){
        document.getElementById("charPeli").innerHTML= "No has escrito ninguna palabra";

    }
}

console.log(obj);
