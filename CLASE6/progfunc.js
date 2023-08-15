//Crear una función donde se reciben 2 arreglos y se regresa un nuevo arreglo con todos los elementos

//Crear arreglos

var a=["Cristina","Lucero","Marlen"];
var b=["Darbo","Claudia","Giovanna"];

//mostrar los arreglos donde corresponden en el html

document.getElementById("arreglo1").innerHTML=a;
document.getElementById("arreglo2").innerHTML=b;

//crear una variable en la cual se guardarán los dos arreglos
var resultado=[];

//crear la función para guardar los dos arreglos en uno

function union(arr1,arr2){
    resultado=[arr1,arr2];
    document.getElementById("arreglof").innerHTML=resultado;
}

//usar la función o llamarla, necesito colocar su nombre
union(a,b);

//función de primera clase

var hola=()=>a
console.log("Hola mundo")

//función de primera clase
var c="como estas";
var hola=()=>c
console.log(c)

//llamar la función hola
hola();

function hola2(){
    console.log("Hola mundo2")
}

hola2();

//función callback
//cada vez que ejecutes la funcion union, me vas a colocar los valores 1,3

[1,3].forEach(union);
console.log(resultado);

//funciones de orden superior
var numero=[1,2,3];
var mapeo = numero.map(function(elemento){
    return elemento+1;
});

document.write(mapeo);
console.log(mapeo);

//funcion asincrona

function sumame(num1,num2){
    var primernumero=parseInt(num1.value);
    var segundonumero=parseInt(num2.value);
    var suma=primernumero+segundonumero;
    document.getElementById("resultado_suma").innerHTML="El resultado de la suma es "+suma;
}

//función impura 
var tiempo=Date.now();
console.log(tiempo);