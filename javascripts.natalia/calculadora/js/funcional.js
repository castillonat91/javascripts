//definir el objeto con las propiedades de la calculadora

var po ={
    teclas: document.querySelectorAll("#contenedor ul li"),
    accion:null

}




//objeto con las funciones de la calculadora 

var fun = {
    inicio:function()
    {
        for(var i =0; i < po.teclas.length;i++)
        {
            po.teclas[i].addEventListener("click",fun.oprimirteclas)
        }

    },
    oprimirteclas:function(tecla)
    {
        po.accion = tecla.target.getAttribute("class");
        fun.calculadora(po.accion);

    },
    calculadora:function(accion)
    {
        switch(accion)
        {
            case "numero":
                console.log("numero");
            break;
            case "simbolo":
                console.log("simbolo");
            break;
            case "decimal":
                console.log("decimal");
        }

    }
}
fun.inicio();
