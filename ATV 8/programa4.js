const prompt = require('prompt-sync')();

let n = prompt('Por favor, insira um número: ');
n = parseInt(n);

function fibonacci(n){
    if(n === 0) {
        return 0;
    } else if(n === 1 || n === 2){
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2) + fibonacci(n - 3);
    }
}

console.log(`O ${n}º número da sequência de Tribonacci é ${fibonacci(n)}.`);
