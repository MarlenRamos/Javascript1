//Utiliza un bucle para mostrar la suma y la media de los numeros introducidos 
//hasta introducir un numero negativo y mostrar el resultado

//declarar las variables
var suma=0;
var contador=0;
var media=0;
var num=0;

//bucle while: mientras num sea mayor o igual a 0 voy a seguir pidiendo números cuando sea negativo se va romper el bucle

while(num>=0){
    num=parseInt(prompt("Introduce un número"));
    suma=suma+num;
    contador=++contador;
    
}
media=suma/contador;
document.write("La suma de los numeros es: "+suma);
document.write("La media de los numeros es: "+contador);
console.log(suma);
console.log(contador);

