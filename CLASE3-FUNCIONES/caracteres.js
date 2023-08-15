
function contarCaracteres(obj){
    if(obj!=''){
        document.getElementById("charNum").innerHTML= obj.value.length + 'caracteres';
    }
    if(obj.value.length==0){
        document.getElementById("charNum").innerHTML= "No has escrito ninguna palabra";

    }
}

console.log(obj);