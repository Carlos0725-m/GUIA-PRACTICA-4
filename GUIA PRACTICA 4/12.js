function contarcaracteres() {
    let frase = prompt("Ingrese una frase:");
    let caracter= prompt("Ingrese un caracter a buscar:");
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === caracter) {
            contador++;
        }   
    }    
    console.log(`la letra'${caracter}' aparece ${contador} veces`);
}