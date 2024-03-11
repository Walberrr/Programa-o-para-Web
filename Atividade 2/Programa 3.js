let dataNascimento = prompt("Por favor, insira a sua data de nascimento (dd/mm/aaaa)");

let partesData = dataNascimento.split("/");
let dataNasc = new Date(partesData[2], partesData[1] - 1, partesData[0]);

let dataAtual = new Date();

let idade = dataAtual.getFullYear() - dataNasc.getFullYear();
if (dataAtual.getMonth() < dataNasc.getMonth() || 
    (dataAtual.getMonth() == dataNasc.getMonth() &&	dataAtual.getDate() < dataNasc.getDate())) {
    idade--;
}

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}
