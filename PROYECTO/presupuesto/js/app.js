/*
let ingresos = {
    new: Ingreso("ejemplo",1000),
    new: Ingreso("ejemplo2",2000)
}
*/

//  let ingresos={
//      quincena:9000,
//      venta:400
//  };


//  let egresos={
//      renta:900,
//      ropa:400
//  };

function formatoMoneda(presupuesto) {
    return presupuesto.toLocaleString("mx", {
        style: "currency",
        currency: "MXN",
    });
}

const formatoPorcentaje = (porcentajeEgreso) =>{
    return porcentajeEgreso.toLocaleString("mx",{
        style:"percent",
        maximumFractionDigits:2,
    });
};

const totalIngresos=() =>{
     var totalIngreso=0;
     var listaIngresos = document.getElementById("lista-ingresos");
     var totalElementoValor=listaIngresos.getElementsByClassName("elemento_valor");
     //for (let ingreso in ingresos)
     for (var ingreso =0; ingreso<totalElementoValor.length; ingreso++)
     {
         totalIngreso = totalIngreso + parseFloat (totalElementoValor[ingreso].innerHTML);
     }
     return totalIngreso;
 };


 const totalEgresos=() =>{
     var totalEgreso=0;
     var listaEgresos = document.getElementById("lista-egresos");
     var totalElementoValor=listaEgresos.getElementsByClassName("elemento_valor");
     for (var egreso =0; egreso<totalElementoValor.length; egreso++)
     {
         totalEgreso=totalEgreso+parseFloat (totalElementoValor[egreso].innerHTML);
     }
     return totalEgreso;

    //  for (let egreso in egresos){
    //      totalEgreso=totalEgreso+egresos[egreso];
    //  }

 };

 const presupuestoTotal = () => {
    var ingreso = totalIngresos();
    var egreso = totalEgresos();
    var presupuestoTotal = ingreso - (-egreso);
    console.log("presupuesto total ",presupuestoTotal);
    return presupuestoTotal;
  }
 
 const cargarPrespuesto = () => {
     const presupuestoElement = document.getElementById("presupuestoTotal");
     presupuestoElement.innerHTML = formatoMoneda(presupuestoTotal());
 
  }


const cargarIngresos = () => {
    const ingresosElement = document.getElementById("presupuesto_ingreso--valor");
    ingresosElement.innerHTML = formatoMoneda(totalIngresos());
    const porcentaje = document.getElementById("presupuesto_ingreso--porcentaje");
    const egresos = totalEgresos();
    const ingresos = totalIngresos();
    const ingresosMoneda = formatoMoneda(ingresos);
    const porcentajeEgresos = ingresos - egresos;
    porcentaje.innerHTML = formatoPorcentaje(ingresos / porcentajeEgresos);
    ingresosElement.innerHTML = ingresosMoneda;
    cargarPrespuesto();

};
  
const cargarEgresos = () => {
    const egresosElement = document.getElementById("presupuesto_egreso--valor");
    const porcentaje = document.getElementById("presupuesto_egreso--porcentaje");
    egresosElement.innerHTML = formatoMoneda(totalEgresos());
    const egresos = totalEgresos();
    const ingresos = totalIngresos();
    const egresosMoneda = formatoMoneda(egresos);
    const porcentajeEgresos = totalEgresos()/totalIngresos();
    porcentaje.innerHTML = formatoPorcentaje(porcentajeEgresos);
    egresosElement.innerHTML = egresosMoneda;
    cargarPrespuesto();

}





const cargarCabecero=() =>{
    cargarEgresos();
    cargarIngresos();
    cargarPrespuesto();

    /*
    var presupuesto=totalIngresos()-totalEgresos();
    var porcentajeEgreso=totalEgresos()/totalIngresos();
    var presupuestoMoneda=formatoMoneda(presupuesto);
    var egresoPorcentuado=formatoPorcentaje(porcentajeEgreso);
    console.log("presupuesto: ",presupuestoMoneda);
    console.log("porcentaje de egreso: ",egresoPorcentuado);
    console.log("total de ingresos: ",totalIngresos());
    console.log("total de egresos: ",totalEgresos());
    console.log("Resultado total presupuesto: ", presupuestoTotal());
    */
};

cargarCabecero();

