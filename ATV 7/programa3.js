const prompt = require('prompt-sync')();

let n = Number(prompt('Por favor, insira o número de termos que deseja gerar: '));
let fib = [1, 1];

for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}

console.log('Os primeiros ' + n + ' termos da série de Fibonacci são: ' + fib.join(', '));

