// defoinir funciones sin argumentos sin retono de argumentos
//variables globales
var peso ;
var altura;
//definir contador y acomulador
var contesta = 0;
var acumesta = 0;
var acupeso = 0;

function ingresardatos(){
    peso = parseFloat(prompt('ingresar el peso'));
    altura = parseFloat(prompt('ingresar la altura'));
    contesta++;
    acumesta += altura;
    acupeso += peso;
}
// funcion sin argumentos pero tiene un retorno
function preguntar(){
    var respuesta = prompt('desea continuar? (si/no)').toLowerCase();
    return respuesta == 'si' || respuesta == 'SI';


}
function calcularimc(){


    //variable local
    let imc = peso/(altura*altura);
    if(imc<18.5){
        document.write("imc es "+ imc.toFixed(2) + "clasificacion bajo peso");
    }else if(imc>=18.5 && imc <25)
    {
        document.write("imc es "+imc.toFixed(2)+ "clasificacion normal");
    }else if(imc>=25 && imc <30)
    {
        document.write("imc es "+imc.toFixed(2)+ "clasificacion sobrepeso");
    }else 
    {
        document.write("imc es "+imc.toFixed(2)+ "clasificacion obeso");
    }





}
do{
    ingresardatos();
    calcularimc();

}while(preguntar());


function promedioaltura()
{
    if(contesta ==0){
        document.write('no se ha ingresado datos de altura')
    }else{
        let promedio = acumesta/contesta;
        document.write(`<br>el promedio de estatura es :`+promedio.toFixed(2)+ "metros");

    }
}
function promediopeso()
{
    if(contesta == 0){
        document.write('no se ha ingresado el peso')
    }else{
        let promediop = acupeso/contesta;
        document.write(`<br>el promedio de peso es : ${promediop} kilogramos`)
    }
}
promedioaltura()
promediopeso()