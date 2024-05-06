// Función para traducir una palabra en español a inglés
function traducirPalabra(palabra) {
    // Objeto con las traducciones
    var traducciones = {
        "mesa": "table",
        "perro": "dog",
        // Agrega más traducciones aquí si es necesario
    };
    
    // Convertir la palabra ingresada por el usuario a minúsculas para evitar problemas de capitalización
    palabra = palabra.toLowerCase();
    
    // Verificar si la palabra está en el objeto de traducciones
    if (traducciones[palabra] !== undefined) {
        // Si la palabra está en el objeto, retornar la traducción correspondiente
        return traducciones[palabra];
    } else {
        // Si la palabra no está en el objeto, retornar un mensaje de error
        return "Palabra no encontrada";
    }
}

// Solicitar al usuario que ingrese una palabra en español
var palabraUsuario = prompt("Ingrese una palabra en español:");

// Traducir la palabra ingresada por el usuario
var traduccion = traducirPalabra(palabraUsuario);

// Mostrar la traducción en la página
document.write("La traducción de '" + palabraUsuario + "' es: " + traduccion);



