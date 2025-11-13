function contarcaracterposicionpar() {
    let frase = prompt("Ingrese una frase:");
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
        if (i % 2 === 0) {
            contador++;
        }
    }
    console.log("caracteres en posiciones pares:"+ contador);
}