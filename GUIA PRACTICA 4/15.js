function añadirtextos() {
    let frase = prompt("Ingrese una frase:");
    let textoAdicional = prompt("Ingrese el texto a añadir:");
    let inicio= textoAdicional + " " + frase;
    let fin= frase + " " + textoAdicional;
    console.log(`${inicio}`);
    console.log(`${fin}`);
}