function buscarpalabra() {
    let frase = prompt("Ingrese una frase:");
    let palabra = prompt("Ingrese la palabra a buscar:");
    let palabraTemp = "";
    let encontrado = false;

    for (let i = 0; i <= frase.length; i++) {
        if (frase[i] === " " || i === frase.length) {
            if (palabraTemp === palabra) {
                encontrado = true;
                break;
            }
            palabraTemp = ""; 
        } else {
            palabraTemp += frase[i]; 
        }
    }

    if (encontrado === true) {
        console.log(`La palabra "${palabra}" sí existe en el texto.`);
    } else {
        console.log(`La palabra "${palabra}" no existe en el texto.`);
    }
}