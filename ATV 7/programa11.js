function calcularMedia(notas) {
    var soma = 0;
    for (var i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    var media = soma / notas.length;
    return media;
}

var notas = [10, 8, 10, 7, 7];
console.log("A média é: " + calcularMedia(notas));
