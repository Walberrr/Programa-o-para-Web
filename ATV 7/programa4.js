const prompt = require('prompt-sync')();

let num = Number(prompt('Por favor, insira um número inteiro: '));
let fatorial = 1;

for (let i = 1; i <= num; i++) {
    fatorial *= i;
}

console.log('O fatorial de ' + num + ' é: ' + fatorial);
