var ing=0;
document.getElementById("agregar_btn").addEventListener("click", e=>{
    var tipo = document.getElementById("tipo")
    var tipo_resultado = tipo.value;
    if(tipo=='egreso'){
        ing=ing+1;
        var nameid='elemento'+ing;
        var div1 =document.createElement('div');
        div1.className ="elemento limpiarEstilos";
        div1.id= nameid;
        document.getElementById(nameid).appendChild(div1);
        //crear la descripción para que salga en html
        var descripcion = document.getElementById("descripcion").value;
        var div2 = document.createElement('div');
        div2.className('elemento_descripcion');
        div2.innerHTML = descripcion;
        div2.id= nameid;
        document.getElementById("lista-egresos").appendChild(div2);

        var nameid2='cantidad'+ing;
        var div3 = document.createElement('div');
        div3.className('derecha limpiarEstilos');
        div3.id= nameid2;
        document.getElementById(nameid).appendChild(div3);

        //creamos el elemento valor
        var valor = document.getElementById("valor").value;
        var valorname = "elemento_valor"+ing;
        var div4 = document.createElement('div');
        div4.className('elemento_valor');
        div4.innerHTML = valor;
        div4.id= nameid2;
        document.getElementById(nameid2).appendChild(div4);

        //creamos el elemento porcentaje
        
        var div5 = document.createElement('div');
        div5.className('elemento_porcentaje');
        div5.id= nameid2;
        document.getElementById(nameid2).appendChild(div5);

        //elemento eliminar ingreso
        var nameid3= 'eliminar'+ing;
        var div6 = document.createElement('div');
        div6.className('elemento_eliminar');
        div6.id= nameid3;
        document.getElementById(nameid3).appendChild(div6);

        //elemento eliminar botón
        var nameid4 = 'btneliminar'+ing;
        var btneliminar = document.createElement('button') 
        btneliminar.innerHTML = '<ion-icon name="close-circle-outline"></ion-icon>'
        btneliminar.id=nameid4;
        btneliminar.classList.add("elemento_eliminar--btn"); //botón dentro de class list 

    }
})