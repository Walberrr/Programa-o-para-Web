var resposta;

// Exibição da pergunta e atribuição da resposta à variável
resposta = prompt("Você deseja continuar?");

// Comparação da resposta com as opções "Sim" ou "Não"
if (resposta === "Sim") {
  // Executa a ação caso a resposta seja "Sim"
  console.log("Ótimo! Continue com a próxima etapa.");
} else if (resposta === "Não") {
  // Executa a ação caso a resposta seja "Não"
  console.log("Tudo bem. Cancelando a operação.");
} else {
  // Executa a ação caso a resposta não seja "Sim" nem "Não"
  console.log("Resposta inválida. Por favor, responda com 'Sim' ou 'Não'.");
}