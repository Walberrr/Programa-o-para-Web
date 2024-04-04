const prompt = require('prompt-sync')();

let num1 = Number(prompt('Por favor, insira o primeiro número inteiro: '));
let num2 = Number(prompt('Por favor, insira o segundo número inteiro: '));
let soma = 0;

if (num1 < num2) {
    for (let i = num1 + 1; i < num2; i++) {
        console.log(i);
        soma += i;
    }
} else {
    for (let i = num2 + 1; i < num1; i++) {
        console.log(i);
        soma += i;
    }
}

console.log('A soma dos números no intervalo é: ' + soma);
