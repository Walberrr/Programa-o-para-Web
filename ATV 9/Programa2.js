let prompt = require('prompt-sync')();

// O let inicializa um objeto vazio para armazenar os alunos
let alunos = {};

// Função para adicionar um novo aluno
function adicionarAluno() {
    // Solicita para o usuário inserir o id, o nome e a nota do aluno
    let id = prompt('Por favor, insira o id do aluno: ');
    let nome = prompt('Por favor, insira o nome do aluno: ');
    let nota = prompt('Por favor, insira a nota do aluno: ');

    // Converte a entrada do usuário para os tipos de dados corretos
    id = parseInt(id);
    nota = parseFloat(nota);

    // Vai criar um objeto para representar o aluno
    let aluno = {
        nome: nome,
        nota: nota
    };

    // Adiciona o aluno ao objeto de alunos
    alunos[id] = aluno;
}

// Função para buscar um aluno por id
function buscarAlunoPorId() {
    // Solicita ao usuário para inserir o id do aluno que ele está procurando
    let id = prompt('Por favor, insira o id do aluno que você está procurando: ');
    id = parseInt(id);

    // Retorna o aluno com o id correspondente
    return alunos[id];
}

// Função para calcular a média das notas dos alunos
function calculaMediaDasNotas() {
    // Inicializa uma variável para armazenar a soma das notas
    let soma = 0;
    let totalAlunos = 0;

    // O for percorre o objeto de alunos
    for (let id in alunos) {
        soma += alunos[id].nota;
        totalAlunos++;
    }

    // Calcula a média dividindo a soma pelo número de alunos
    return soma / totalAlunos;
}
