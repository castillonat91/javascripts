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
    document.querySelector('#total').textContent = cantidad.presupuesto
    }
    
    imprimirAlerta(menasje, tipo) {
        //crear el div
    const divMensaje = document.createElement('div');
    divMensaje.classList.add('text-center','alert');

    //si es de tipo error agregar una clase
    if(tipo == 'error')
        {
            divMensaje.classList.add('alert-danger');
        }else
        {
            divMensaje.classList.add('alert-succes');
        }
        //mensaje de error
        divMensaje.textContent = mensaje;

        //insertar en el dom
        document.querySelector('.primario').insertBefore(divMensaje,formulario);

        //quitar la alerta despues de 5 segundos
        setTimeout( () =>{
            document.querySelector('.primario .alert').remove();
        },5000);
    }

    agregarGastosListado(){

    

        //limpiar el html
        this.limpiarHTML();
    
        //definir el array para iterar los gastos que van ingresar
        gasto.forEach(gasto => {
            const{nombre, cantidad, id} = gasto;
    
            //creamos lista
            const nuevogasto = document.createElement('li');
            nuevogasto.className = 'list-group-item d-flex justifify-content-between align-items-center';
            nuevogasto.dataset.id = id;
    
            //insertar el gasto en el html
            nuevogasto.innerHTML = '${nombre}<span class="badge-primary badge-pill">$ ${cantidad}</span>';
    
            //crear el boton de borrar gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn','btn-danger','borrar-gasto');
            btnBorrar.textContent = 'Borrar';
            nuevogasto.appendChild(btnBorrar);
    
            //insertar en el html
            listadogastos.appendChild(nuevogasto);
        });
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
function agregarGastos(gasto){

    //limpiar el html
    this.limpiarHTML();

    //definir el array para iterar los gastos que van ingresar
    gasto.forEach(gasto => {
        const{nombre, cantidad, id} = gasto;

        //creamos lista
        const nuevogasto = document.createElement('li');
        nuevogasto.className = 'list-group-item d-flex justifify-content-between align-items-center';
        nuevogasto.dataset.id = id;

        //insertar el gasto en el html
        nuevogasto.innerHTML = '${nombre}<span class="badge-primary badge-pill">$ ${cantidad}</span>';

        //crear el boton de borrar gasto
        const btnBorrar = document.createElement('button');
        btnBorrar.classList.add('btn','btn-danger','borrar-gasto');
        btnBorrar.textContent = 'Borrar';
        nuevogasto.appendChild(btnBorrar);

        //insertar en el html
        listadogastos.appendChild(nuevogasto);
    });
}


function agregarGastos()
{
    //leer del formulario agregar-gasto
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    //comprobamos que los campos no esten vacios
    if(nombre === '' || cantidad === '')
        {
            ui.imprimirAlerta('ambos son obligatorios ','error');
        }else{
            const gasto = {nombre,cantidad,id:dat}
        }

    
}
function eliminarGastos()
{
     
}