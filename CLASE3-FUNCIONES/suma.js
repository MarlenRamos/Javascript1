//pedir los números al usuario

var numero1=parseInt(prompt("Introduce el primer número",));

//pedir el segundo número
var numero2=parseInt(prompt("Introduce el segundo número",));

//crear función anónima

var suma = function sumaNumeros(num1,num2){
    var operacion = num1 + num2;
    document.write("La suma es de: "+operacion);
}

//llamar a la función

suma(numero1,numero2);