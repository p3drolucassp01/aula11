/**
 * Função que gerencia a lista de tarefas.
 * O script cria um array vazio de tarefas, adiciona três tarefas usando o método .push(),
 * remove a última tarefa com o método .pop() e exibe o array final no console.
 * 
 * @returns {void} Não retorna nenhum valor, apenas manipula e exibe o array de tarefas.
 */
function gerenciarTarefas() {
    // 1. Criação de um array vazio chamado "tarefas"
    let tarefas = [];
  
    // 2. Adicionando três tarefas usando o método .push()
    tarefas.push("Comprar leite");
    tarefas.push("Estudar JavaScript");
    tarefas.push("Ir ao supermercado");
  
    // 3. Removendo a última tarefa com o método .pop()
    tarefas.pop();
  
    // 4. Exibindo o array final no console
    console.log(tarefas); // Exibe o array de tarefas restantes após a remoção
  }
  
  // Chamando a função para executar as ações
  gerenciarTarefas();
  