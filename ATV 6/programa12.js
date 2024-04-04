const prompt = require('prompt-sync')();

let num = Number(prompt('Por favor, insira um número inteiro entre 1 e 10 para ver a tabuada: '));

console.log('Tabuada de ' + num + ':');
for (let i = 1; i <= 10; i++) {
    console.log(num + ' X ' + i + ' = ' + num * i);
}
