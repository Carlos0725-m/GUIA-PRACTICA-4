function contarminusculas() {
    let frase = prompt("Ingrese una frase:");
    let contador = 0, i=0;
    for ( i = 0; i < frase.length; i++) {
        if (i === 0 && frase[i] >= 'a' && frase[i] <= 'z') {
            contador++;
        }
    if (frase[i]==" " && frase[i + 1] >= 'a' && frase[i + 1] <= 'z') {
        contador++;
    }
}
    console.log(`Cantidad de letras minusculas: ${contador}`);
}