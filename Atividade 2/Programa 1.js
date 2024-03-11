let peso = prompt("Por favor, insira o seu peso em quilogramas");
let altura = prompt("Por favor, insira a sua altura");

let imc = peso / (altura * altura);

let categoria;
if (imc < 18.5) {
    categoria = "Abaixo do peso";
} else if (imc >= 18.5 && imc <= 24.9) {
    categoria = "Peso normal";
} else if (imc >= 25.0 && imc <= 29.9) {
    categoria = "Excesso de peso";
} else if (imc >= 30.0 && imc <= 34.9) {
    categoria = "Obesidade grau I";
} else if (imc >= 35.0 && imc <= 39.9) {
    categoria = "Obesidade grau II";
} else {
    categoria = "Obesidade grau III";
}

console.log("Seu IMC é " + imc.toFixed(2) + " e você está na categoria: " + categoria);
