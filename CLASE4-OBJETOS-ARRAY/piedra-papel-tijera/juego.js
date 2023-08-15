var opciones={
    "piedra":
    {
        "piedra": "empate",
        "tijera": "ganas",
        "papel": "pierdes"
    },
    "tijera":
    {
        'piedra':'pierdes',
        'tijera': 'empate',
        'papel': 'ganas'
    },
    "papel":{
        'piedra':'ganas',
        'tijera': 'pierdes',
        'papel':'empate'
    }
};

//crear variables para los puntos del usuario y de la compu

var puntosUsuario=0;
var puntosComputadora=0;

function revisar(input){
    //crear un arreglo con las opciones que puede elegir la compu
    var opcionesCompu=["piedra", "papel", "tijera"];
    //crear variable para selección aleatoria de opciones
    var numero=Math.floor(Math.random()*3); //*3 número de elementos
    //crear variable para decirle que opción va a tomar la compu
    var computadoraEleccion=opcionesCompu[numero];
    //crear la variable donde se mostrará si el jugador gana, pierde o empata
    var resultado="";

    switch (opciones[input][computadoraEleccion]){
        case 'empate':
            resultado="Has empatado";
            puntosUsuario=puntosUsuario;
            puntosComputadora=puntosComputadora;
            break;
        
        case'pierdes':
            resultado="Has perdido";
            puntosUsuario=puntosUsuario;
            puntosComputadora++;
            break;

        case'ganas':
            resultado="Has ganado";
            puntosUsuario++;
            puntosComputadora=puntosComputadora;
            break;
            
    }

    document.getElementById("computadora").innerHTML="La computadora eligió: "+computadoraEleccion;
    document.getElementById("resultado").textContent=resultado;
    document.getElementById("puntosUsuario").innerHTML="Llevas los siguientes puntos: "+puntosUsuario;
    document.getElementById("puntosComputadora").innerHTML="La computadora lleva los siguientes puntos: "+puntosComputadora;


}

