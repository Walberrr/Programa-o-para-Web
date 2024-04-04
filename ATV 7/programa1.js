const prompt = require('prompt-sync')();

let base = Number(prompt('Por favor, insira a base: '));
let expoente = Number(prompt('Por favor, insira o expoente: '));
let resultado = 1;

for (let i = 0; i < expoente; i++) {
    resultado *= base;
}

console.log(base + ' elevado a ' + expoente + ' é igual a ' + resultado);
