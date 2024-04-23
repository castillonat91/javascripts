//definir el array
let numeros = [1,2,3,4,5];
document.write(numeros);
 //acceder al elemento del array 

 document.write('<br>el primer elemento',numeros[0]);
 document.write('<br>el ultimo elemento',numeros[4]);

 //modificar elementos del array
 numeros[3]=50;
 document.write(numeros);

 //añadir elemento del array
 numeros.push(6);
 document.write(numeros);
 //eliminar un elemento al array
 let ultimo = numeros.pop();
 document.write(ultimo);
 document.write(numeros);

 //recorrer el array 
 for(let i=0;i<=4;i++){
    document.write('<br>elemento ',i,":",numeros[i]);
 }


 let ciudades = ["bogota","cali","medellin","barranquilla","armenia","pereira","ibague"]
 document.write('la 3 ciudad es',ciudades[3]);

