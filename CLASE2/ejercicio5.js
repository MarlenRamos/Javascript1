//calculadora pedir 2 números realizar la suma, resta, multiplicación y división

var numero1 = parseInt(prompt('Ingresa el primer número', 0));
var numero2 = parseInt(prompt('Ingresa el segundo número', 0));

var suma=0;
var resta=0;
var multi=0;
var div=0;

suma=numero1+numero2;
resta=numero1-numero2;
multi=numero1*numero2;
div=numero1/numero2;

//mostrar el resultado en un <h1>
document.write("<h3> La suma de los números " + numero1 + " y " + numero2 + " es: " +suma+ "</h3> <br>");
document.write("<h3> La resta de los números " + numero1 + " y " + numero2 + " es: " +resta+ "</h3> <br>");
document.write("<h3> La miltiplicación de los números " + numero1 + " y " + numero2 + " es: " +multi+ "</h3> <br>");
document.write("<h3> La división de los números " + numero1 + " y " + numero2 + " es: " +div+ "</h3> <br>");

