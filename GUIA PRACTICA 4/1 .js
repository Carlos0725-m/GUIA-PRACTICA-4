function contarpalabras() {
let frase = prompt("Ingrese una frase:");
let contador = 0;
frase = frase.trim();
if (frase.length > 0) {
    contador = 1; 
for (let i = 0; i < frase.length; i++) {
 if (frase[i] == " " || frase[i] == "\n") {
  contador++;
}  
}
console.log(`numero de palabras: ${contador}`);
}
}