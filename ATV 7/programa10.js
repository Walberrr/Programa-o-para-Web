const prompt = require('prompt-sync')();

let N = Number(prompt('Por favor, insira um número inteiro: '));
let divisoes = 0;

for (let num = 2; num <= N; num++) {
    let isPrimo = true;
    for (let i = 2; i < num; i++) {
        divisoes++;
        if (num % i === 0) {
            isPrimo = false;
            break;
        }
    }
    if (isPrimo) {
        console.log(num + ' é um número primo.');
    }
}
console.log('O número total de divisões executadas foi: ' + divisoes);
