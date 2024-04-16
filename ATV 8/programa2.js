const prompt = require('prompt-sync')();

let n = prompt('Por favor, insira um número: ');
n = parseInt(n);

function Recursiva(n){
    if(n === 1) {
        return 1;
    } else {
        return 1/n + Recursiva(n - 1);
    }
}

console.log(`A soma de 1 até 1/${n} é ${Recursiva(n)}.`);
