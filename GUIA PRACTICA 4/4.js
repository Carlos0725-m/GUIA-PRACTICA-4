function contarconsonantes() {
    let frase = prompt("Ingrese una frase:");
  frase = frase.toLowerCase();
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] >= 'a' && frase[i] <= 'z' && !"aeiouáéíóú".includes(frase[i])) {
            contador++;
        }
    }
    console.log(`Cantidad de consonantes: ${contador}`);
}