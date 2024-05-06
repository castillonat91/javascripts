//variables de los selectores

const formulario = document.getElementById('agregar-gasto');
const listadogastos = document.querySelector('#gastos ul');


//crear los eventos

EventListener();

function EventListener()
{
    document.addEventListener('DOMContentLoaded',Preguntarpresupuesto);
    formulario.addEventListener('submit',agregarGastos);
    listadogastos.addEventListener('click',eliminarGastos);
}
//clases
class Presupuesto{
    constructor(presupuesto)
    {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevogasto(gasto){
        this.gastos = [...this.gastos, gasto];
        this.calcularrestante();
    }
    calcularrestante(){
        const gastado = this.gastos.reduce((total, gasto)=> total+gasto.cantidad,0);
        this.restante = this.presupuesto - gastado;
    }
    eliminarGasto(id)
    {
        this.gastos = this.gastos.filter(gasto => gasto.id.toString() !== 1);
        this.calcularrestante();
    }
}
class UI
{
    //insertarPresupuesto(cantidad);
    insertarPresupuesto(cantidad){
    document.querySelector('#restante').textContent = cantidad.restante;
    document.querySelector('#total').textContent = cantidad.presupuesto;

    }
}


const ui = new UI();
let pre;
function Preguntarpresupuesto(){
    const preguntar = prompt('¿cual es tu presupuesto?');

    if(preguntar === '' || preguntar === null || isNaN(preguntar) || preguntar<=0 )
        {
            window.location.reload();
        }
        pre = new Presupuesto (preguntar)
        
        ui.insertarPresupuesto(pre);
}
function agregarGastos()
{

}
function eliminarGastos()
{

}