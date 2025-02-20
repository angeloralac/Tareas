//noprotect

function jugar() {
    
    var numeroComputadora = Math.floor(Math.random() * 9);

    
    var numeroUsuario = prompt("Ingresa un número entre 3 y 6:");

    
    while (numeroUsuario < 3 || numeroUsuario > 6) {
        numeroUsuario = prompt("Número inválido. Ingresa un número entre 3 y 6:");
    }

   
    var adivinanza = prompt("¿Crees que tu número es mayor, menor o igual al de la computadora? (Escribe 'mayor', 'menor' o 'igual'):");


    if (
        (adivinanza === "mayor" && numeroUsuario > numeroComputadora) ||
        (adivinanza === "menor" && numeroUsuario < numeroComputadora) ||
        (adivinanza === "igual" && numeroUsuario === numeroComputadora)
    ) {
        console.log(`La computadora eligió ${numeroComputadora}, usted eligió ${numeroUsuario}. Su elección es ${adivinanza}. ¡Ha adivinado!`);
    } else {
        console.log(`La computadora eligió ${numeroComputadora}, usted eligió ${numeroUsuario}. Su elección es incorrecta. ¡No ha adivinado!`);
    }

  
    var jugarOtraVez = prompt("¿Quieres jugar otra vez? (Escribe 'SI' o 'NO'):").toUpperCase();
    if (jugarOtraVez === "SI") {
        jugar(); 
    } else {
        console.log("Gracias por jugar. Nombre: [Angelo Ralac], Carnet: [1210086].");
    }
}


jugar();