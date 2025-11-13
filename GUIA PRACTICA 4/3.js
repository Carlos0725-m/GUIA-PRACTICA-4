function contarvocales() {
    let frase = prompt("Ingrese una frase:");
    let contador = 0;
    let vocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U", "á", "é", "í", "ó", "ú", "Á", "É", "Í", "Ó", "Ú"];
    for (let i = 0; i < frase.length; i++) {
        if (vocales.includes(frase[i])) {
            contador++;
        }
    }
    console.log(`cantidad de vocales: ${contador}`);
}