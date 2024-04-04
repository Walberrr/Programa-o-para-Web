const prompt = require('prompt-sync')();

let nome, idade, salario, sexo, estadoCivil;

do {
    nome = prompt('Por favor, insira o nome (maior que 3 caracteres): ');
} while (nome.length <= 3);

do {
    idade = prompt('Por favor, insira a idade (entre 0 e 150): ');
} while (idade < 0 || idade > 150);

do {
    salario = prompt('Por favor, insira o salário (deve ser maior que zero): ');
} while (salario <= 0);

do {
    sexo = prompt('Por favor, insira o sexo (\'f\' ou \'m\'): ');
} while (sexo !== 'f' && sexo !== 'm');

do {
    estadoCivil = prompt('Por favor, insira o estado civil (\'s\', \'c\', \'v\', \'d\'): ');
} while (estadoCivil !== 's' && estadoCivil !== 'c' && estadoCivil !== 'v' && estadoCivil !== 'd');

console.log('Informações válidas!');
