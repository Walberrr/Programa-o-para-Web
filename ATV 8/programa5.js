const prompt = require('prompt-sync')();

let n = prompt('Por favor, insira um número: ');
n = parseInt(n);

function pell(n){
    if(n === 0) {
        return 0;
    } else if(n === 1) {
        return 1;
    } else {
        return 2 * pell(n - 1) + pell(n - 2);
    }
}

console.log(`O ${n}º número da sequencia de pell é ${pell(n)}.`);
