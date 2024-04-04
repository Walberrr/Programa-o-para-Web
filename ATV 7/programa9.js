const prompt = require('prompt-sync')();

let num = Number(prompt('Por favor, insira um número inteiro: '));
let divisores = [];

for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        divisores.push(i);
    }
}

if (divisores.length === 0 && num > 1) {
    console.log(num + ' é um número primo.');
} else {
    console.log(num + ' não é um número primo. Ele é divisível por: ' + divisores.join(', '));
}
