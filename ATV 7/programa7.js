const prompt = require('prompt-sync')();

while (true) {
    let num;
    do {
        num = Number(prompt('Por favor, insira um número inteiro positivo menor que 16: '));
    } while (num < 0 || num > 16 || !Number.isInteger(num));

    let fatorial = 1;
    for (let i = 1; i <= num; i++) {
        fatorial *= i;
    }

    console.log('O fatorial de ' + num + ' é: ' + fatorial);

    let continuar = prompt('Deseja continuar? (s/n): ');
    if (continuar.toLowerCase() !== 's') {
        break;
    }
}

console.log('Programa encerrado.');
