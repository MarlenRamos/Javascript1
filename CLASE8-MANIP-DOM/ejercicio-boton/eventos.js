//crear la variable para obtener el botón que está en html
var boton1=document.getElementById("boton1");

//crear la función flecha para reducir el botón

var reducir=()=> {
    boton1.style.width="70px"
};

//crear la función flecha para volver el botón al original
var volver=()=> {
    boton1.style.width="200px"
};


//hacer el click mediante el uso de EventListener
boton1.addEventListener("mouseover", reducir);
boton1.addEventListener("mouseout", volver);