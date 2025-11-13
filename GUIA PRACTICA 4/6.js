function contarmayusculas() {
    let frase = prompt("Ingrese una frase:");
    let contador = 0, i=0;
    for (i = 0; i < frase.length; i++) {
        if (i === 0 && frase[i] >= 'A' && frase[i] <= 'Z') {
            contador++;
        }
    if (frase[i]==" " && frase[i + 1] >= 'A' && frase[i + 1] <= 'Z') {
        contador++;
    }
}
    console.log(`Cantidad de letras mayúsculas: ${contador}`);
}