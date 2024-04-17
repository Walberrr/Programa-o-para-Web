// Aqui é importado o pacote 'prompt-sync' para ler a entrada do usuário
let prompt = require('prompt-sync')();

// Inicializa um array vazio para armazenar os alunos
let alunos = [];

let alunoEncontrado = null;
let media = 0;

// Aqui a função "adcAluno" adiciona um novo aluno e depois solicita para o usuário inserir os dados
function adcAluno() {
    let id = prompt('Por favor, insira o id do aluno: ');
    let nome = prompt('Por favor, insira o nome do aluno: ');
    let nota = prompt('Por favor, insira a nota do aluno: ');

    id = parseInt(id);
    nota = parseFloat(nota);

    // Aqui cria um objeto para representar o aluno
    let aluno = {
        id: id,
        nome: nome,
        nota: nota
    };

    // Adiciona o aluno ao array de alunos
    alunos.push(aluno);
}

// Função para buscar um aluno por id
function buscarAlunoPorId() {
    // Aqui solicita ao usuário para inserir o id do aluno que ele está procurando
    let id = prompt('Por favor, insira o id do aluno que você está procurando: ');
    id = parseInt(id);

    // Aqui vai percorrer o array de alunos
    for(let i = 0; i < alunos.length; i++) {
        if(alunos[i].id === id) {
            alunoEncontrado = alunos[i];
        }
    }
}

// Função para calcular a média das notas dos alunos
function calcularMediaDasNotas() {
    let soma = 0;

    // Percorre o array de alunos
    for(let i = 0; i < alunos.length; i++) {
        // Adiciona a nota do aluno atual à soma
        soma += alunos[i].nota;
    }

    media = soma / alunos.length;
}
