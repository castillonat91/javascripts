//definir el objeto con las propiedades de la calculadora

var po ={ 

    teclas: document.querySelectorAll("#contenedor ul li"),
    accion:null,
    digito:null,
    operaciones:document.querySelector("#operaciones"),
    cantisig:0,
    cantidecimal:false,
    resultado:false

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
        po.digito = tecla.target.innerHTML;
        fun.calculadora(po.accion,po.digito);

    },
    calculadora:function(accion,digito)
    {
        switch(accion)
        {
            
            case "numero":
                po.cantisig = 0;
                if(po.operaciones.innerHTML==0)
                {
                    po.operaciones.innerHTML = digito;
                }else
                {
                    if(po.resultado)
                    {
                        po.resultado= false;
                        po.operaciones.innerHTML=digito;
                    }
                    else
                    {
                        po.operaciones.innerHTML += digito;
                    }
                }
                console.log("numero");
            break;
            case "simbolo":
                po.cantisig ++;
                if(po.cantisig == 1)
                {
                    if(po.operaciones.innerHTML == "0")
                    {
                        po.operaciones.innerHTML = 0;
                    }else{
                        po.operaciones.innerHTML += digito;
                        po.cantidecimal = false;
                        po.resultado = false;
                    }
                }
                console.log("simbolo");
            break;
            case "decimal":
                if(!po.cantidecimal && po.cantisig!=1)
                {
                    po.operaciones.innerHTML += digito;
                    po.cantidecimal = true;
                    po.resultado = false;
                }
                console.log("decimal");
            break;
            case "igual":
                po.operaciones.innerHTML = eval(po.operaciones.innerHTML);
                po.resultado = true;
                console.log("igual")
            break;
            case "eliminardigito":

                if(po.operaciones.innerHTML.length <= 1){
                    po.operaciones.innerHTML = "0";
                }
                po.operaciones.innerHTML = po.operaciones.innerHTML.slice(0, -1);
                po.resultado = false;
            break;
                
        
                
            case "raiz":
                po.operaciones.innerHTML = Math.sqrt(po.operaciones.innerHTML);
                po.resultado = true;
                console.log("raiz")
            break;
            case "pi":
                po.operaciones.innerHTML =po.operaciones.innerHTML*Math.PI;
                po.resultado = true;
                console.log("pi")
            break;
            case "cubo":
                po.operaciones.innerHTML =Math.pow(po.operaciones.innerHTML,3);
                po.resultado = true;
                console.log("cubo")

                
        }

    },
    borrarcalculadora:function()
    {
        po.resultado = false;
        po.operaciones.innerHTML = 0;
    }
}
fun.inicio();
