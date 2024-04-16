const prompt = require('prompt-sync')();

let n = prompt('Por favor insira um número: ');
n = parseInt(n);

function recursiva(n){
    if(n === 1) {
        return 1;
    } else {
        return n + recursiva(n - 1);
    }
}

console.log(`A soma de 1 até ${n} é ${recursiva(n)}.`);
