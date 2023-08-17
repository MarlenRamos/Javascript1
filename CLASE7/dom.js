//CREAR FUNCIÓN QUE AL MOMENTO DE CARGAR LA PÁGINA NOS CREE UN H1 EN EL HTML
window.onload = function () {
    //crear el h1 mediante una variable
    var cabecera = document.createElement("h1");
    //crear el nodo que contendrá el texto del h1
    var texto = document.createTextNode("Hola mundo");
    //indicar que texto pertenece a cabecera, es decir, que cabecera sea el padre del texto
    cabecera.appendChild(texto);
    //indicar emparejamiento con body (de acuerdo al árbol, de abajo hacia arriba)
    document.body.appendChild(cabecera);

    //mostrar en consola el contenido de href, lo que está dentro de los corchetes es el número de elemento que estoy seleccionando, por ejemplo si tengo dos "a" y coloco [0], va a mostrar el valor del primero
    var enlace = document.body.getElementsByTagName("a")[0];
    console.log(enlace.href)

    //pedirle que inserte antes de un elemento

    // var parrafo=document.body.getElementsByTagName("h1");
    // document.insertBefore(parrafo[2],parrafo[0])
    // document.insertBefore()

    //pedirle que inserte antes de un elemento
    var menu = document.getElementById('menu');
    //crear un nuevo nodo li
    




}

