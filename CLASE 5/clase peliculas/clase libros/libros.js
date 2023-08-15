//crear la clase libros

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

//creamos el objeto que tendrá dichas propiedades
var book={
    title:"Harry Potter",
    author:" J.K Rowling",
    price:"$278"
};
// crear otro objeto con las propiedades

var book2={
    title:"El señor de los anillos",
    author: "Tolkien",
    price:"300"
};
//crear una variable de tipo clase libro
var ejemplo=new libros(book);
var ejemplo2=new libros(book2);
//mostrar en la consola el titulo el autor y el precio

console.log(`Titulo: ${ejemplo.title}, Autor: ${ejemplo.author}, Precio: ${ejemplo.price}`);
console.log(`Titulo: ${ejemplo2.title}, Autor: ${ejemplo2.author}, Precio: ${ejemplo2.price}`);