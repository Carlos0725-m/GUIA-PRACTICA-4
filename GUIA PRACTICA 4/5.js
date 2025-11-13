function contardigitos() {
    let numero = prompt("Ingrese una frase:");
    let contador = 0;
    for (let i = 0; i < numero.length; i++) {
        if (numero[i] >= '0' && numero[i] <= '9') {
            contador++;
        }
    }
    console.log(`Cantidad de dígitos: ${contador}`);
}