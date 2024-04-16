const prompt = require('prompt-sync')();

let x = prompt('Por favor, insira a base: ');
let k = prompt('Por favor, insira o expoente: ');

x = parseInt(x);
k = parseInt(k);

function Recursiva(x, k){
    if(k === 0) {
        return 1;
    } else {
        return x * Recursiva(x, k - 1);
    }
}

console.log(`${x} elevado a ${k} é ${Recursiva(x, k)}.`);
