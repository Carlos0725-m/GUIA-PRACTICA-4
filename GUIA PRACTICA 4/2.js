function contarsignnos(){
    let signos= [".",",",";",":","!","?","¿","¡",'"'];
    let frase= prompt("Ingrese una frase:");
    let contador=0;
    for (let i=0; i<frase.length; i++){
        if (signos.includes(frase[i])){
            contador++;
        }
    }
    console.log(`Número de signos de puntuación: ${contador}`);
}