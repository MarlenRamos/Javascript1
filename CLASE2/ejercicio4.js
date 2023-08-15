/*Modifica el ejercicio anterior para mostrar en la consola solamente los números impares
que hay entre los dos números */



var numero1 = parseInt(prompt('Ingresa el primer número', 0));
var numero2 = parseInt(prompt('Ingresa el segundo número', 0));

//mostrar el resultado en un <h1>
document.write("<h1> Los números impares que existen entre" + numero1 + " y " + numero2 + " son: </h1>");

//bucle while: mientras numero1 es menor que numero2

while(numero1<numero2){
    numero1++;
    if (numero1%2!=0){
        document.write("\n", numero1);
    }
}

//bucle while: mientras numero2 es menor que numero1

while(numero2<numero1){
    numero2++;
    if (numero2%2!=0){
        document.write("\n", numero2);
    }
}

//mostrar el resultado en un <h1>
document.write("<h1> Los números pares que existen entre" + numero1 + " y " + numero2 + " son: </h1>");


//bucle while: mientras numero1 es menor que numero2

while(numero1<numero2){
    numero1++;
    if (numero1%2==0){
        document.write("\n", numero1);
    }
}

//bucle while: mientras numero2 es menor que numero1

while(numero2<numero1){
    numero2++;
    if (numero2%2==0){
        document.write("\n", numero2);
    }
}