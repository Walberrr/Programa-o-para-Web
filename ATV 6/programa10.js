const prompt = require('prompt-sync')();

let num1 = Number(prompt('Por favor, insira o primeiro número que seja inteiro: '));
let num2 = Number(prompt('Por favor, insira o segundo número que seja inteiro: '));

if (num1 < num2) {
    for (let i = num1 + 1; i < num2; i++) {
        console.log(i);
    }
} else {
    for (let i = num2 + 1; i < num1; i++) {
        console.log(i);
    }
}
