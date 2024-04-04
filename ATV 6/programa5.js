const prompt = require('prompt-sync')();

let popA, popB, taxaA, taxaB, anos;

while (true) {
    popA = Number(prompt('Por favor, insira a população inicial do país A: '));
    popB = Number(prompt('Por favor, insira a população inicial do país B: '));
    taxaA = Number(prompt('Por favor, insira a taxa de crescimento do país A (em %): ')) / 100;
    taxaB = Number(prompt('Por favor, insira a taxa de crescimento do país B (em %): ')) / 100;
    anos = 0;

    while (isNaN(popA) || isNaN(popB) || isNaN(taxaA) || isNaN(taxaB)) {
        console.log('Erro: Entrada inválida. Por favor, insira apenas números.');
        popA = Number(prompt('Por favor, insira a população inicial do país A: '));
        popB = Number(prompt('Por favor, insira a população inicial do país B: '));
        taxaA = Number(prompt('Por favor, insira a taxa de crescimento do país A (em %): ')) / 100;
        taxaB = Number(prompt('Por favor, insira a taxa de crescimento do país B (em %): ')) / 100;
    }

    while (popA < popB) {
        popA += popA * taxaA;
        popB += popB * taxaB;
        anos++;
    }

    console.log('Serão necessários ' + anos + ' anos para que a população do país A ultrapasse ou iguale a população do país B.');

    let continuar = prompt('Deseja continuar? (s/n): ');
    if (continuar.toLowerCase() !== 's') {
        break;
    }
}

console.log('Programa encerrado.');
