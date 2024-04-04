const prompt = require('prompt-sync')();

let N = Number(prompt('Por favor, insira a quantidade de números: '));
let numeros = [];

for (let i = 0; i < N; i++) {

    let numero = Number(prompt('Por favor, insira o número ' + (i + 1) + ': '));
    numeros.push(numero);

}

let menorValor = Math.min(...numeros);
let maiorValor = Math.max(...numeros);
let soma = numeros.reduce((a, b) => a + b, 0);

console.log('O menor valor é: ' + menorValor);
console.log('O maior valor é: ' + maiorValor);
console.log('A soma dos valores é: ' + soma);
