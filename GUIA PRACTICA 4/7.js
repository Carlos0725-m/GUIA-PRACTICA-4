function contarparrafos() {
    let texto = prompt("Ingrese un texto con párrafos separados por saltos de línea:");
    let contador = 0;
    texto = texto.trim();
    if (texto.length>0)
    contador = 1;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === '\n' && texto[i + 1] !== '\n') {
            contador++;
        }
    }
    console.log(`Número de párrafos: ${contador}`);
}