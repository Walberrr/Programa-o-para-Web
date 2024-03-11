let lado1 = prompt("Por favor, insira o comprimento do primeiro lado do triângulo");
let lado2 = prompt("Por favor, insira o comprimento do segundo lado do triângulo");
let lado3 = prompt("Por favor, insira o comprimento do terceiro lado do triângulo");

lado1 = Number(lado1);
lado2 = Number(lado2);
lado3 = Number(lado3);

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    if (lado1 === lado2 && lado2 === lado3) {
        console.log("O triângulo é equilátero.");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log("O triângulo é isósceles.");
    } else {
        console.log("O triângulo é escaleno.");
    }
} else {
    console.log("Os lados fornecidos não formam um triângulo válido.");
}
