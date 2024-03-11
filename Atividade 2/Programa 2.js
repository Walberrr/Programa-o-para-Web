let numeroSecreto = Math.floor(Math.random() * 100) + 1;

let tentativas = 0;

while (true) {
    let palpite = prompt("Adivinhe o número secreto entre 1 e 100");

    tentativas++;

    if (palpite == numeroSecreto) {
        console.log("Parabéns! Você adivinhou o número secreto em " + tentativas + " tentativas.");
        break;
    } else if (palpite > numeroSecreto) {
        console.log("O número secreto é menor. Tente novamente mais uma vez.");
    } else if (palpite < numeroSecreto) {
        console.log("O número secreto é maior. Tente novamente mais uma vez.");
    }
}

