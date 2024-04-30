function validarFormulario(){
    var nombrevalido = validarnombre();
    var apellidovalido = validarapellido();
    var emailvalido = validaremail();
    var usuariovalido = validarusuario();
    var contrasenavalido = validarcontrasena();

if(nombrevalido && apellidovalido && emailvalido && usuariovalido && contrasenavalido)
{
    alert("registro exitoso");
    return true;
}else {
    alert("verificar sus campos");
    return false;
}
    


}
function validarnombre(){
    var nombre = document.getElementById('nombre').value;
    if(nombre.trim()=="")
    {
        alert("por favor ingresar el nombre");
        return false;
    }
    return true;


}
function validarapellido(){
    var apellido = document.getElementById('apellido').value;
    if(apellido.trim()=="")
    {
        alert("por favor ingrese el apellido")
        return false;
    }
    return true;


}
function validaremail(){
    var email = document.getElementById('email').value;
    if(email.trim()=="")
    {
        alert("por favr ingrese un email")
        return false;
    }else if(!formatoemail(email)){
        alert("por favor ingresar un correo electronico valido");
        return false;
    }
    return true;

    
}
function validarusuario(){
    var usuario = document.getElementById('usuario').value;
    if(usuario.trim()=="")
    {
        alert("por favor ingrese el usuario")
        return false;
    }
    return true;


}
function validarcontrasena(){

    var contrasena = document.getElementById('contrasena').value;
    var expresion = /^(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if(contrasena.trim() == ""){
        alert("por favor ingresar la contraseña")
        return false;
    }else if(!expresion.test(contrasena)){
        alert("Por favor ingresar contraseña valido");
        return false;
    }
    return true;
    /*var connumero = /\d/.test(contrasena);
    var conmayuscula = /[A-Z]/.test(contrasena);
    var conminuscula = /[a-z]/.test(contrasena);
    
    if(contrasena.trim()=="")
    {
        alert("por favor ingresar la contraseña");
        return false;
    }else if(contrasena.length < 9){
        alert("la contraseña debe tener almenos 8 caracteres");
        return false;

    }else if(!connumero){
        alert("la contraseña debe tener al mnenos un numero");
        return false;

    }else if(!conmayuscula){
        alert("la contraseña debe tener al menos una letra con mayuscula");
        return false;

    }else if(!conminuscula){
        alert("la contraseña debe tener al menos una letra en minuscula");
        return false;
    }
    return true;*/

}

function formatoemail(email){
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}