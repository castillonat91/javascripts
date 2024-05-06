var numeros = [10, 5, 8, 20, 3, 15];

let maximo = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maximo) {
        maximo = numeros[i];
    }
}

document.write("el maximo valor es:", maximo);
