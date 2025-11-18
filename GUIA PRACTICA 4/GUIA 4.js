//ejercicio 1

function ContarPalabras() {
    let palabra = prompt("Ingrese una frase:");
    let c = 1;

    for (let i = 0; i < palabra.length - 1; i++) {
        if (palabra[i] == " " && palabra[i + 1] != " ") {
            c++;
        }
    }

    console.log("La frase tiene " + c + " palabras");
}

//ejercicio 2
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


//ejercicio 3
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

//ejercicio 4
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


//ejercicio 5
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


//ejercicio 6
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


//ejercicio 7
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


//ejercicio 8
function invertirFrase() {
    let frase = prompt("Ingrese una frase:");
    let fraseInvertida = "";
    for (let i = frase.length - 1; i >= 0; i--) {
        fraseInvertida += frase[i];
    }
    console.log(`Frase invertida: ${fraseInvertida}`);
}


//ejercicio 9
function contarcaracteres() {
    let frase = prompt("Ingrese una frase:");
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
        contador++;
    }       
    console.log(`Cantidad de caracteres: ${contador}`);
}


//ejercicio 10
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


//ejercicio 11
function buscarpalabra() {
    let frase = prompt("Ingrese una frase:");
    let palabra = prompt("Ingrese la palabra a buscar:");
    let palabraTemp = "";
    let encontrado = false;

    for (let i = 0; i <= frase.length; i++) {
        if (frase[i] === " " || i === frase.length) {
            if (palabraTemp === palabra) {
                encontrado = true;
                break;
            }
            palabraTemp = ""; 
        } else {
            palabraTemp += frase[i]; 
        }
    }

    if (encontrado === true) {
        console.log(`La palabra "${palabra}" sí existe en el texto.`);
    } else {
        console.log(`La palabra "${palabra}" no existe en el texto.`);
    }
}


//ejercicio 12
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


//ejercicio 13
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

//ejercicio 14
function contarcaracterposicionimpar() {
    let frase = prompt("Ingrese una frase:");
    let  contador = 0;
    for (let i = 0; i < frase.length; i++) {
        if (i % 2 !== 0) {
            contador++;
        }
    }
    console.log(" caracteres en posiciones impares: "+ contador);
}

//ejercicio 15
function añadirtextos() {
    let frase = prompt("Ingrese una frase:");
    let textoAdicional = prompt("Ingrese el texto a añadir:");
    let inicio= textoAdicional + " " + frase;
    let fin= frase + " " + textoAdicional;
    console.log(`${inicio}`);
    console.log(`${fin}`);
}


