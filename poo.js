//definir la clase

class persona {

    //definir atributos de la clase
    constructor(nombre,apellido,edad,genero){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.genero = genero;
    }

    //definir los metodos
saludar()
{
    document.write('<br>buenos dias, soy' +this.nombre);
    document.write('<br>su apellido es: ' +this.apellido);
    document.write('<br>mi edad es: '+this.edad);
    document.write('<br>mi genero es: '+this.genero);

}
mayor()
{
    if(this.edad >= 18)
    {
        document.write('eres mayor de edad');
    }else 
    {
        document.write('eres menor de edad');
    }
}

calcularedadanosydias()
{
    let anitos = Math.floor(this.edad);
    let dias =   Math.floor(this.edad * 365); 

    document.write('<br>usted tiene '+anitos+'años'+' y '+dias+'dias');

}
}  

//crear el objeto
document.write("<br>soy la primera persona = objeto");
const persona1 = new persona('juan','gomez',90,'masculino');


document.write("<br>soy la segunda persona");
const persona2 = new persona('natalia','castillo',19,'mujer');

persona1.saludar();
persona1.mayor();
persona1.calcularedadanosydias();
persona2.saludar();
persona2.mayor();
persona2.calcularedadanosydias();