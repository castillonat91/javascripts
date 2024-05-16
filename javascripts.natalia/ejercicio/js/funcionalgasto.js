//variables de los selectores
const formulario = document.getElementById('agregar-gasto');
const listadogastos = document.querySelector('#gastos ul');

//crear los eventos
EventListener();
function EventListener() {
    document.addEventListener('DOMContentLoaded', Preguntarpresupuesto);
    formulario.addEventListener('submit', agregarGastos);
    listadogastos.addEventListener('click', eliminarGastos);
}

//clases
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevogasto(gasto) {
        this.gastos = [...this.gastos, gasto];
        this.calcularrestante();
    }

    eliminarGasto(id) {
        this.gastos = this.gastos.filter(gasto => gasto.id.toString() !== id);
        this.calcularrestante();
    }

    calcularrestante() {
        const gastado = this.gastos.reduce((total, gasto) => total + gasto.cantidad, 0);
        this.restante = this.presupuesto - gastado;
    }
}

class UI {
    //insertarPresupuesto(cantidad);
    insertarPresupuesto(cantidad) {
     document.querySelector('#total').textContent = cantidad.presupuesto;
     document.querySelector('#restante').textContent = cantidad.restante;
     
    }

    imprimirAlerta(mensaje, tipo) {
        //crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');

        //si es de tipo error agregar una clase
        if (tipo == 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }
        //mensaje de error
        divMensaje.textContent = mensaje;

        //insertar en el dom
        document.querySelector('.principal').insertBefore(divMensaje, formulario);

        //quitar la alerta despues de 5 segundos
        setTimeout(() => {
            document.querySelector('.principal .alert').remove();
        }, 3000);
    }

    //Insertar los gastos a la lista
    agregarGastosListado(gastos) {

        //limpiar el html
        this.limpiarHTML();

        //definir el array para iterar los gastos que van ingresar
        gastos.forEach(gasto => {
            const { nombre, cantidad, id } = gasto;

            //creamos lista
            const nuevogasto = document.createElement('li');
            nuevogasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            nuevogasto.dataset.id = id;

            //insertar el gasto en el html
            nuevogasto.innerHTML = `
                ${nombre}
                <span class="badge badge-primary badge-pill">$ ${cantidad}</span>
            `;

            //crear boton de borrar gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.textContent = 'Borrar';
            nuevogasto.appendChild(btnBorrar);

            //insertar en el html
            listadogastos.appendChild(nuevogasto);
        });
    }

    //comprueba el presupuesto restante
    actualizarRestante(restante) {
        document.querySelector('span#restante').textContent = restante;
    }

    //cambia de color el presupuesto restante
    comprobarPresupuesto(presupuestoObj) {
        const { presupuesto, restante } = presupuestoObj;
        const restanteDiv = document.querySelector('.restante');

        //console.log(restante);
        //console.log( presupuesto);

        //comprobar el 25%
        if ((presupuesto / 4) > restante) {
            restanteDiv.classList.remove('alert-success', 'alert-warning');
            restanteDiv.classList.add('alert-danger');
        } else if ((presupuesto / 2) > restante) {
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-warning');
        } else {
            restanteDiv.classList.remove('alert-danger', 'alert-warning');
            restanteDiv.classList.add('alert-success');
        }
        //si presupuesto es igual a 0
        if (restante <= 0) {
            this.imprimirAlerta('El presupuesto se ha agotado', 'error');
            formulario.querySelector('button[type="submit"]').disabled = true;
        }
    }

    limpiarHTML() {
        while (listadogastos.firstChild) {
            listadogastos.removeChild(listadogastos.firstChild);
        }
    }
}

const ui = new UI();
let presupuesto;

function Preguntarpresupuesto() {
    const presupuestoUsuario = prompt('¿Cuál es tu presupuesto?');

    if (presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        window.location.reload();
    }
    //presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario);

    //agregarlo en el HTML
    ui.insertarPresupuesto(presupuesto);
}

function agregarGastos(e) {
    e.preventDefault();

    //leer del formulario de Gastos
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#Cantidad').value);

    //comprobar que los campos no estén vacíos
    if (nombre === '' || cantidad === '') {
        // 2 parametros: mensaje y tipo
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
    } else if (cantidad <= 0 || isNaN(cantidad)) {
        //si hay una cantidad negativa o letras...
        ui.imprimirAlerta('Cantidad no válida', 'error');
    } else {
        const gasto = { nombre, cantidad, id: Date.now() };

        //añadir un nuevo gasto
        presupuesto.nuevogasto(gasto);

        //insertar en el HTML
        ui.imprimirAlerta('Correcto', 'correcto');

        //pasa los gastos para que se impriman
        const { gastos } = presupuesto;
        ui.agregarGastosListado(gastos);

        //cambiar la clase que nos avisa si se va terminando
        ui.comprobarPresupuesto(presupuesto);

        //actualiza el presupuesto restante
        const { restante } = presupuesto;

        //actualizar cuanto nos queda
        ui.actualizarRestante(restante);

        //reiniciar el formulario
        formulario.reset();
    }
}

function eliminarGastos(e) {
    if (e.target.classList.contains('borrar-gasto')) {
        const { id } = e.target.parentElement.dataset;
        presupuesto.eliminarGasto(id);
        //reembolsar
        ui.comprobarPresupuesto(presupuesto);

        // pasar la cantidad restante para actualizar el DOM
        const { restante } = presupuesto;
        ui.actualizarRestante(restante);

        //eliminar el DOM
        e.target.parentElement.remove();
    }
}
