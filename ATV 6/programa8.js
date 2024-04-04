const prompt = require('prompt-sync')();

let soma = 0;

for (let i = 0; i < 5; i++) {
    let numero = Number(prompt('Por favor, insira aqui um número: '));
    soma += numero;
}

let media = soma / 5;

console.log('A soma dos números é: ' + soma);
console.log('A média dos números é: ' + media);
