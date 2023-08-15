//Programa que muestre todos los  números que estan entre dos números
//introducidos por el usuario

var numero1=parseInt(prompt('Ingresa el primer número',0));
var numero2=parseInt(prompt('Ingresa el segundo número',0));

//mostrar el resultado en un <h1>
document.write("<h1> De " +numero1+ " a " +numero2+ " estan los números: </h1>");

//verificar cuál es el número mayor

if(numero1<numero2){
    for(var i=numero1+1;i<numero2;i++){
        document.write("\n",i);

    }
}
else{
    for(var i=numero1-1;i>numero2;i--){
        document.write("\n",i);

    }
}