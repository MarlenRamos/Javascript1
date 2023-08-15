class libros{
    constructor(datos){
        this.title=datos.title;
        this.author=datos.author;
        this.price=datos.price;
    }
    
    //programar los getters: estos son para que regrese el valor que le fue asignado a esa propiedad
    getTitle(){
        return this.title;
    }
    //los setters son los que asignan el valor a la propiedad
    setTitle(){
        this.title=newTitle;
    }
    getAuthor(){
        return this.author;
    }
    setAuthor(){
        this.author=newAuthor;
    }
    getPrice(){
        return this.price;
    }
    setPrice(){
        this.price=newPrice;
    }
    
}

// crear la clase heredada

class peliculas extends libros{
    constructor(datos1){
        super(datos1,datos1,datos1);
        this.estudio=datos1.estudio;
        
        
    }
    //getter y setter
    getEstudio(){
            return this.estudio=datos1.estudio;
        }
        setEstudio(){
            this.estudio=newEstudio;
        }
}
// crear el objeto que definirá las propiedades

var peli={
    title:"Spiderman",
    author:"marvel",
    price:"$180",
    estudio:"Universal"
};

// creamos la variable de clase pelicula

var heredado=new peliculas(peli);

//mostrar el resultado en la consola
console.log(`Titulo: ${heredado.title}, Autor: ${heredado.author}, Precio: ${heredado.price}, Estudio: ${heredado.estudio}`);