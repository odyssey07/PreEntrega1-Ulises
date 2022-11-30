let allowedCharacters = "abcdefghijklmnopqrstuvwxyz";
allowedCharacters += allowedCharacters.toUpperCase();
allowedCharacters += "1234567890";
allowedCharacters += '().#-_';

function getPassword(passwordLength) {
    let password = '';
    for (let i=0; i<passwordLength; i++) {
        let randomIndex = Math.round(Math.random()*(allowedCharacters.length-1));
        password += allowedCharacters[randomIndex];
    }
    return password;
}

const rules = "●  Presiona 'e' para generar una contraseña\n●  Presiona 'q' para salir ";

alert("Bienvenido al generador de contraseñas\n\n¿Cómo funciona?\n\nPrimero debes presionar F12 y abrir la consola para luego copiar el resultado\n\n"+rules);

do {
    let selection = prompt().toLowerCase();
    if (selection === 'e') {
        alert("A continuación, ingresa la cantidad de caracteres que quieres que tenga la contraseña.");
        let passwordLength = prompt();
        let password = getPassword(passwordLength);
        console.log(password);
        alert("Tu contraseña es:\n\n"+password+"\n\nPuedes copiarla desde la consola!");
    } else if (selection === 'q') {
        break;
    } else {
        alert("Ingresa una opción no valida. Por favor seleccione una opción nuevamente.");
    }
    alert(rules);
} while (true);

alert("El programa ha finalizado.");