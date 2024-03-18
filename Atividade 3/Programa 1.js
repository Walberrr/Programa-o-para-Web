var prompt = require('prompt-sync')();

class ContaBancaria {
    constructor(saldoInicial) {
        this.saldoInicial = saldoInicial;
    }

    verificarSaldo() {
        if (this.saldoInicial > 0) {
            console.log("Saldo positivo");
        } else {
            console.log("Saldo negativo");
        }

        }

        realizarSaque(valorSaque) {
            if (valorSaque <= this.saldoInicial) { 
                this.saldoInicial -= valorSaque;
                console.log(`Saque realizado com sucesso. Saldo atual: R$${saldoInicial}`);
              } else {
                console.log("Saldo insuficiente");
              }
        }

        realizarDeposito(valorDeposito) {

            this.saldoInicial += valorDeposito;
            console.log(`Depósito realizado com sucesso. Novo saldo: R$${saldoInicial}`);
        }
        
        realizarTransferencia(aldoDestino, valorTransferencia, limiteTransferencia) {
            if (valorTransferencia <= this.saldoInicial && valorTransferencia <= limiteTransferencia) {

                this.saldoInicial -= valorTransferencia;
                saldoDestino += valorTransferencia;
    
                console.log("Transferência realizada com sucesso");
              } else if (valorTransferencia > this.saldoInicial) {
                console.log("Saldo insuficiente para transferência");
              } else {
                console.log("Valor excede o limite de transferência");
              }
        }

        checarChequeEspecial() {
            if (this.saldoInicial < 0) { 
                console.log("Dentro do limite do cheque especial");
              } else {
                console.log("Fora do limite do cheque especial");
              }
        }

        atualizarCadastro(cadastroAtivo) {
            if (cadastroAtivo) {
                if (this.saldo > 0) {
                  console.log("Cadastro ativo e saldo positivo");
                } else {
                  console.log("Cadastro ativo mas precisa regularizar saldo"); 
                }
              } else {
                console.log("Por favor, atualize seu cadastro");
        }

        avaliarCredito(historicoCredito, rendaMensal); {
            if (this.saldo > 1000 && historicoCredito && rendaMensal > 3000) {
                console.log("Crédito aprovado");
              } else {
                console.log("Crédito negado");
              }
        }
    }
}

var banco = new ContaBancaria(2000);
console.log("1. Verificar saldo\n2. Avaliar crédito\n3. Realizar transferência\n4. Realizar depósito\n5. Realizar saque");
var opcao = prompt("Escolha uma opção:");

switch (opcao) {
    case "1":
        banco.verificarSaldo();
        break;
    case "2":
        banco.avaliarCredito();
        break;
    case "3":
        const valorTransferencia = parseFloat(prompt("Digite o valor da transferência:"));
        banco.realizarTransferencia(valorTransferencia);
        break;
    case "4":
        const valorDeposito = parseFloat(prompt("Digite o valor do depósito:"));
        banco.realizarDeposito(valorDeposito);
        break;
    case "5":
        const valorSaque = parseFloat(prompt("Digite o valor do saque:"));
        banco.realizarSaque(valorSaque);
        break;
    default:
        console.log("Opção inválida.");
}

let conta = new ContaBancaria('João', 1000);
conta.verificarSaldo();