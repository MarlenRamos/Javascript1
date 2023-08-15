//creación de variable númerica
var numero_entero=24;
//creación de tipo string
var cadena_texto="Hola";
//creación de booleano
var verdadero_falso=true;
//crear numero falso
var numero_falso="33";

//conversión de string a numero entero
//parseInt


//suma de número entero y número falso
var numero_correcto = parseInt(numero_falso);
var suma = numero_entero+numero_correcto;

//Mostrar resultado directo en html
document.write(suma);
console.log(suma);

//Mostrar el tipo de dato de cada variable
console.log(typeof numero_entero);
console.log(typeof cadena_texto);
console.log(typeof verdadero_falso);
console.log(typeof numero_falso);
console.log(typeof numero_correcto);

