let valor = prompt("Por favor, insira o valor que você deseja sacar");

valor = Number(valor);

if (valor % 10 === 0) {
    console.log("Saque realizado com sucesso");
} else {
    console.log("Valor inválido. Digite um valor múltiplo de 10");
}
