/**
 * Função que exibe as palavras de um array no console em ordem reversa.
 * 
 * A função recebe um array de palavras como argumento e utiliza um loop `for` reverso
 * para exibir cada palavra do array no console, começando da última até a primeira.
 * 
 * @param {Array<string>} palavras - Array contendo palavras a serem exibidas em ordem reversa.
 *
 * @returns {void} Não retorna nenhum valor, apenas exibe as palavras no console.
 */
function exibirPalavrasReverso(palavras) {
    // 1. Loop reverso para percorrer o array de palavras
    for (let i = palavras.length - 1; i >= 0; i--) {
      // Exibe a palavra no console
      console.log(palavras[i]);
    }
  }
  
  // Chamando a função com um array de palavras
  exibirPalavrasReverso(["café", "livro", "código", "javascript", "aprendizado"]);
  