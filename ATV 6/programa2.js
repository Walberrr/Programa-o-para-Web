const prompt = require('prompt-sync')();

let username = prompt('Por favor, insira o nome de usuário: ');
let password = prompt('Por favor, insira a senha: ');

while (username === password) {
    console.log('Por favor, A senha não pode ser igual ao nome do usuário!');
    username = prompt('Por favor, insira o nome de usuário: ');
    password = prompt('Por favor, insira a senha: ');
}

console.log('O nome de usuário e senha são válidos!');
