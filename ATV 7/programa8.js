const prompt = require('prompt-sync')();

let num = Number(prompt('Por favor, insira um número inteiro: '));
let isPrimo = true;

for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        isPrimo = false;
        break;
    }
}

if (isPrimo && num > 1) {
    console.log(num + ' é um número primo.');
} else {
    console.log(num + ' não é um número primo.');
}
