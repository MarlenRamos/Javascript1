/*
class Egreso extends Dato{
    constructor(descripcion,valor){
        super(descripcion,valor);
        var contadorEgresos=0;
        this._id=++contadorEgresos;

    }

    get id(){
        return this._id;
    }
    
}

*/

/*

var egr=0;
document.getElementById("agregar_btn").addEventListener("click", e=>{
    var tipo = document.getElementById("tipo");
    var tipo_resultado = tipo.value;
    console.log("Muestra tipo resultado: "+tipo_resultado);

    if(tipo=='egreso'){
        //elemento limpiar estilos
        egr=egr+1;
        var nameid='elemento'+egr;
        var div1 = document.createElement('div');
        div1.className ="elemento limpiarEstilos";
        div1.id= nameid;
        document.getElementById("lista-egresos").appendChild(div1);

        //crear la descripción para que salga en html elemento descripción
        var descripcion = document.getElementById("descripcion").value;
        var div2 = document.createElement('div');
        div2.className('elemento_descripcion');
        div2.innerHTML = descripcion;
        div2.id= nameid;
        document.getElementById(nameid).appendChild(div2);

        var nameid2='cantidad'+egr;
        var div3 = document.createElement('div');
        div3.className('derecha limpiarEstilos');
        div3.id= nameid2;
        document.getElementById(nameid).appendChild(div3);

        //creamos el elemento valor
        var valor = document.getElementById("valor").value;
        var valorname = "elemento_valor"+egr; //cambiar elemento valor egrre 
        var div4 = document.createElement('div');
        div4.className('elemento_valor');
        div4.innerHTML = valor;
        div4.id= valorname;
        document.getElementById(nameid2).appendChild(div4);

        //creamos el elemento porcentaje
        
        var div5 = document.createElement('div');
        div5.className('elemento_porcentaje');
        div5.id= nameid2;
        document.getElementById(nameid2).appendChild(div5);

        //elemento eliminar egreso
        var nameid3= 'eliminar'+egr;
        var div6 = document.createElement('div');
        div6.className('elemento_eliminar');
        div6.id= nameid3;
        document.getElementById(nameid3).appendChild(div6);

        //elemento eliminar botón
        var nameid4 = 'btneliminar'+egr;
        var btneliminar = document.createElement('button') 
        btneliminar.innerHTML = '<ion-icon name="close-circle-outline"></ion-icon>';
        btneliminar.id=nameid4;
        btneliminar.classList.add("elemento_eliminar--btn"); //botón dentro de class list 

    }
});

*/

/*

var egr=0;

function agregarElemento(descripcion, valor, tipo_resultado) {
    
    if(tipo_resultado=='egreso'){
        
        egr=egr+1;
        
        //elemento limpiar estilos
        var nameid='elemento'+egr;
        var div1 = document.createElement('div');
        div1.className ="elemento limpiarEstilos";
        div1.id= nameid;
        document.getElementById("lista-egresos").appendChild(div1);

        //crear la descripción para que salga en html elemento descripción
        //var descripcion = document.getElementById("descripcion").value;
        var div2 = document.createElement('div');
        div2.className='elemento_descripcion';
        div2.innerHTML = descripcion;
        div2.id= "descripcion" + egr;
        document.getElementById(nameid).appendChild(div2);

        //ELEMENTO DERECHA

        var nameid2='cantidad'+egr;
        var div3 = document.createElement('div');
        div3.className='derecha limpiarEstilos';
        div3.id= nameid2;
        document.getElementById(nameid).appendChild(div3);

        //creamos el elemento valor
        //var valor = document.getElementById("valor").value;
        var valorname = "elemento_valor"+egr; //cambiar elemento valor egrre 
        var div4 = document.createElement('div');
        div4.className='elemento_valor';
        div4.innerHTML = valor;
        div4.id= valorname;
        document.getElementById(nameid2).appendChild(div4);

        //creamos el elemento porcentaje
        var porcentajename = "elemento_porcentaje" + egr;
        var div5 = document.createElement('div');
        div5.className='elemento_porcentaje';
        div5.innerHTML = valor;
        div5.id= porcentajename;
        document.getElementById(nameid2).appendChild(div5);

        //elemento eliminar 
        var nameid3= 'eliminar'+egr;
        var div6 = document.createElement('div');
        div6.className='elemento_eliminar';
        div6.id= nameid3;
        document.getElementById(nameid2).appendChild(div6);

        //elemento eliminar botón
        var nameid4 = 'btneliminar'+egr;
        var btneliminar = document.createElement('button') 
        btneliminar.innerHTML = '<ion-icon name="close-circle-outline"></ion-icon>';
        btneliminar.id=nameid4;
        btneliminar.classList.add("elemento_eliminar--btn"); //botón dentro de class list 
        document.getElementById(nameid3).appendChild(btneliminar);

        document.getElementById(nameid3).appendChild(btneliminar);
        btneliminar.addEventListener("click", () => {
        console.log(1);
        eliminarElemento(nameid);
        });
            
    }
}
    function eliminarElemento(elementId) {
    console.log(elementId);
    var elementoAEliminar = document.getElementById(elementId);
    if (elementoAEliminar) {
      elementoAEliminar.remove(); 
      cargarEgresos();
      limpiarValores();
    }
    }

    function limpiarValores() {
        document.getElementById("descripcion").value = "";
        document.getElementById("valor").value = 0;
      }

    document.getElementById("agregar_btn").addEventListener("click", e=>{
    var tipo = document.getElementById("tipo");
    var tipo_resultado = tipo.value;
    var descripcion = document.getElementById("descripcion").value;
    var valor = document.getElementById("valor").value;
    console.log("Muestra tipo resultado: "+tipo_resultado);

    agregarElemento(descripcion, valor, tipo_resultado);
    cargarEgresos();
       
        });

 */

var ing = 0;

function agregarElemento(descripcion, valor, tipo_resultado) {
  ing = ing + 1;

  var listaId = "lista-ingresos";
  var signo = "";

  if (tipo_resultado == "egreso") {
    listaId = "lista-egresos";
    signo = "-";
  }

  var nameid = "elemento" + ing;
  var div1 = document.createElement("div");
  div1.className = "elemento limpiarEstilos";
  div1.id = nameid;
  document.getElementById(listaId).appendChild(div1);

  //crear descripcion para que salga en HTMl
  var div2 = document.createElement("div");
  div2.className = "elemento_descripcion";
  div2.innerHTML = descripcion;
  div2.id = "descripcion" + ing;
  document.getElementById(nameid).appendChild(div2);

  var derechaid = "derecha" + ing;
  var div3 = document.createElement("div");
  div3.className = "derecha limpiarEstilos";
  div3.id = derechaid;
  document.getElementById(nameid).appendChild(div3);

  //creacion de elemento valor
  var div4 = document.createElement("div");
  var valorElementId = "elemento_valor" + ing;
  div4.className = "elemento_valor";
  div4.innerHTML = signo + valor;
  div4.id = valorElementId;
  document.getElementById(derechaid).appendChild(div4);

  //creacion de elemento porcentaje
  var div5 = document.createElement("div");
  var porcentajeElementId = "elemento_porcentaje" + ing;
  div5.className = "elemento_porcentaje";
  div5.innerHTML = formatoPorcentaje(valor/presupuestoTotal());
  div5.id = porcentajeElementId;
  document.getElementById(derechaid).appendChild(div5);

  //elemento eliminar
  var eliminarElementId = "eliminar" + ing;
  var div6 = document.createElement("div");
  div6.className = "elemento_eliminar";
  div6.id = eliminarElementId;
  document.getElementById(derechaid).appendChild(div6);

  //boton eliminar
  var botonEliminarId = "btneliminar" + ing;
  var btnEliminarIngreso = document.createElement("button");
  btnEliminarIngreso.innerHTML =
    '  <ion-icon name="close-circle-outline"></ion-icon>';
  btnEliminarIngreso.id = botonEliminarId;
  btnEliminarIngreso.classList.add("elemento_eliminar--btn");
  document.getElementById(eliminarElementId).appendChild(btnEliminarIngreso);
  btnEliminarIngreso.addEventListener("click", () => {
    console.log(ing);
    eliminarElemento(nameid); 
  });
}

function eliminarElemento(elementId) {
  console.log(elementId);
  var elementoAEliminar = document.getElementById(elementId);
  if (elementoAEliminar) {
    elementoAEliminar.remove(); 
    cargarEgresos();
    cargarIngresos();
    limpiarValores();
  }
}

function limpiarValores() {
  document.getElementById("descripcion").value = "";
  document.getElementById("valor").value = 0;
}

document.getElementById("agregar_btn").addEventListener("click", (e) => {
  var tipo_resultado = document.getElementById("tipo").value;
  var descripcion = document.getElementById("descripcion").value;
  var valor = document.getElementById("valor").value;
  if (!descripcion) {
    return alert("Tienes que agregar una descripción");
  }
  if (!valor) {
    return alert("Tienes que agregar un valor");
  }
  agregarElemento(descripcion, valor, tipo_resultado);
  cargarIngresos();
  cargarEgresos();
  limpiarValores();
});
