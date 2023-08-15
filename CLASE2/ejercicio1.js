//Porgrama que pida 2 números y nols indique cuál es el mayor menor y si son iguales

//crear variable que ejecute un prompt para pedir el 1 numero
var numero1=parseInt(prompt("Ingresa el primer número",0));
//crear variable que ejecute un prompt para pedir el 2 numero
var numero2=parseInt(prompt("Ingresa el segundo número",0));

if(numero1==numero2){
    document.write("Los números son iguales");
}
else if(numero1<numero2)
{
    document.write("El número mayor es ",+numero2);
}
else{
    document.write("El número mayor es ",+numero1);
}
