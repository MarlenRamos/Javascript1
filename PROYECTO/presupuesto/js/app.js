const totalIngresos=() =>{
    var totalIngreso=0;
    var totalElementoValor=document.getElementsByClassName("elemento_valor");
    //for (let ingreso in ingresos)
    for (ingreso =0; ingreso<totalElementoValor.length; ingreso++)
    {
        totalIngreso=totalIngreso+parseFloat (totalElementoValor[ingreso].innerHTML);
    }
    return totalIngreso;
};

let ingresos={
    quincena:9000,
    venta:400
};

const totalEgresos=() =>{
    var totalEgreso=0;
    for (let egreso in egresos){
        totalEgreso=totalEgreso+egresos[egreso];
    }
    //document.getElementById("Ingreso")
    return totalEgreso;
};

let egresos={
    renta:900,
    ropa:400
};

const formatoMoneda =(presupuesto) =>{
    return presupuesto.toLocaleString("mx",{
        style: "currency",
        currency: "MXN",
    });
};

const formatoPorcentaje = (porcentajeEgreso) =>{
    return porcentajeEgreso.toLocaleString("mx",{
        style:"percent",
        maximumFractionDigits:2,
    });
};

const cargarCabecero=() =>{
    var presupuesto=totalIngresos()-totalEgresos();
    var porcentajeEgreso=totalEgresos()/totalIngresos();
    var presupuestoMoneda=formatoMoneda(presupuesto);
    var egresoPorcentuado=formatoPorcentaje(porcentajeEgreso);
    console.log("presupuesto: ",presupuestoMoneda);
    console.log("porcentaje de egreso: ",egresoPorcentuado);
    console.log("total de ingresos: ",totalIngresos());
    console.log("total de egresos: ",totalEgresos());
};


cargarCabecero();
