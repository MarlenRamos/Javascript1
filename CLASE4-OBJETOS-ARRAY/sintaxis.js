//creación de un objeto

var nombreobjeto={
    
}

// crear el objeto que se llama jugador

var jugador={

    nombre:"Ryu",
    poder: 10,
    vida:99
};

// mostrar en la consola la propiedad de poder del jugador

console.log(jugador.poder);

// document.write("El poder de tu jugador es de ", +jugador.poder);

document.getElementById("poder").innerHTML= "El poder de tu jugador es: " +jugador.poder;

//Forma alternativa de mostrar objeto, no se recomienda porque se confunde con un arreglo
document.write("El nombre de tu jugador es: ", jugador["nombre"]);

//crear una función dentro de un objeto

var usuario={
    nombre:"Cristina",
    saludo: function(){
        return "hola";
    }
}

//para llamar a la función creada dentro del objeto
//document.write(usuario.saludo());

//llamar a la función creada y que me muestre la propiedad de nombre

document.write(usuario.saludo(), usuario.nombre);

/*
ARREGLOS
*/

//Creación de un arreglo 

var nombres=["Cristina", "Martin", "Jorge", "Darbo"];

//mostrar un elemento en específico

document.write("El elemento que se encuentra en la [0] es: ", nombres[0]);

//mostrar el arreglo completo

for(var i=0;i<nombres.length;i++){
    console.log(nombres[i]);
}

nombres.forEach(function(nom){
    console.log(nom)
});

//manipulación de los arreglos

//agregar un nuevo elemento al arreglo

nombres.push("Raquel","Marlen");
nombres.push("Lucero");
console.log(nombres);

//eliminar el primer elemento del arreglo

nombres.shift();
console.log(nombres);

//eliminar el ultimo elemento del arreglo

nombres.pop();
console.log(nombres);

//agregar al primer elemento del arreglo
nombres.unshift("Cristina");
console.log(nombres);


//eliminar el elemento por posición
//splice(posición, numero de elementos a eliminar, nuevo elemento en ese lugar)
nombres.splice(1,1);
//nombres.splice(1,1,"sustituto");
console.log(nombres);

//colocar un elemento en una posición

nombres.splice(1,0,"Pedro");
console.log(nombres);