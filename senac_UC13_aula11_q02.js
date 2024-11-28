/**
 * Função que gerencia o estoque de produtos.
 * O script cria um array chamado "estoque" com 4 itens iniciais, 
 * atualiza o segundo item do array, e exibe o número total de itens no estoque.
 * 
 * @returns {void} Não retorna nenhum valor, apenas manipula e exibe o estoque.
 */
function gerenciarEstoque() {
    // 1. Criação de um array de estoque com 4 itens iniciais
    let estoque = ["Produto A", "Produto B", "Produto C", "Produto D"];
  
    // 2. Atualizando o segundo item (índice 1) do array
    estoque[1] = "Produto Atualizado"; // Substitui "Produto B" por "Produto Atualizado"
  
    // 3. Exibindo o número total de itens no estoque
    console.log("Número total de itens no estoque:", estoque.length);
    console.log("Estoque atual:", estoque); // Exibe o estoque atualizado
  }
  
  // Chamando a função para executar as ações
  gerenciarEstoque();
  