//solicitar el número para sacar el factorial

var numero=parseInt(prompt("Escribe el número para obtener su factorial",));

//función de factorial

function factorial(num){
    var total=1;
    for(var i=1; i<=num; i++){
        total=total*i;
    }
    document.write("El factorial del numero " +num+ " es: ", total);

}

factorial(numero);