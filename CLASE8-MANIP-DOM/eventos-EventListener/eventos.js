//crear la variable para obtener el botón que está en html
var boton=document.getElementById("saludo");

//crear la función flecha para el saludo

var saludar=()=> alert("Hola chicos");

//hacer el click mediante el uso de EventListener
boton.addEventListener("click", saludar);