var prompt = require('prompt-sync')();

let nota = prompt("Por favor, insira uma nota entre 0 e 10: ");

while (nota < 0 || nota > 10) {
    console.log("Valor inválido!");
    nota = prompt("Por favor, insira uma nota entre 0 e 10: ");
}

console.log("Nota válida: " + nota);
