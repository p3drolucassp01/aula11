/**
 * Função que permite ao usuário jogar um jogo de adivinhação de números.
 * O usuário deve adivinhar um número entre 1 e 10.
 * O script continuará pedindo números até que o usuário acerte ou digite "sair".
 * 
 * @returns {void} Não retorna nenhum valor. Exibe mensagens no console.
 */
function jogoAdivinhacao() {
    // Número a ser adivinhado (pode ser gerado aleatoriamente ou fixo)
    const numeroCorreto = Math.floor(Math.random() * 10) + 1; // número entre 1 e 10
    let tentativa; // Variável para armazenar a tentativa do usuário
  
    // Loop while para continuar pedindo números até o usuário acertar ou sair
    while (true) {
      // Solicita ao usuário que insira um número ou "sair"
      tentativa = prompt("Adivinhe um número entre 1 e 10 ou digite 'sair' para sair:");
  
      // Se o usuário digitar "sair", o loop é interrompido
      if (tentativa.toLowerCase() === "sair") {
        console.log("Você saiu do jogo.");
        break; // Sai do loop
      }
  
      // Converte a tentativa para número
      tentativa = parseInt(tentativa);
  
      // Verifica se a tentativa é válida (um número entre 1 e 10)
      if (isNaN(tentativa) || tentativa < 1 || tentativa > 10) {
        console.log("Por favor, digite um número entre 1 e 10.");
      } else {
        // Se o número estiver correto
        if (tentativa === numeroCorreto) {
          console.log("Parabéns! Você acertou o número!");
          break; // Sai do loop, já que o usuário acertou
        } else {
          console.log("Tente novamente.");
        }
      }
    }
  }
  
  // Chamando a função para iniciar o jogo
  jogoAdivinhacao();
  