//declarar la función hablar

function hablar(linea){
    console.log(`La persona ${this.tipo} dice '${linea}'`);
}

//crear los 2 objetos con los tipos de personas
var personaFeliz={
    tipo:"Feliz",
    hablar
};

var personaHambrienta={
    tipo:"Hambrienta",
    hablar
};

//convertir la función hablar a método
personaFeliz.hablar("La vida es bella," + "Hoy es un buen día");
personaHambrienta.hablar("Podría comerme un león ahora mismo");

//un objeto prototipo es como el objeto padre, el objeto raiz

var personaPrototipo={
    hablar(palabras){
        console.log(`La persona ${this.tipo} dice '${palabras}'`);
    }
};

//para crear un objeto hijo del objeto prototipo se usa Object.create

var personaSonriente=Object.create(personaPrototipo);
//agrego una nueva propiedad al objeto hijo que el objeto padre no tiene
personaSonriente.tipo="sonriente";
// le doy un valor a la propiedad heredada del objeto padre
personaSonriente.hablar("jajajajaaj");