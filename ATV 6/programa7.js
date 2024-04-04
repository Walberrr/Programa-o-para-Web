const prompt = require('prompt-sync')();

let maiorNumero = Number(prompt('Por favor, insira o primeiro número: '));

for (let i = 1; i < 5; i++) {
    let numero = Number(prompt('Por favor, insira um número: '));
    if (numero > maiorNumero) {
        maiorNumero = numero;
    }
}

console.log('O maior número é: ' + maiorNumero);

