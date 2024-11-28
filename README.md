O que foi pedido pela questão:
1. Questão 1:

Crie um script que gerencie uma lista de tarefas. O script deve:

Criar um array vazio chamado tarefas.
Adicionar três tarefas usando o método .push().
Remover a última tarefa adicionada usando .pop().
Exibir o array final no console.
Requisitos:

Documentar o script usando JSDoc.

O que eu fiz:
Descrição:

A função gerenciarTarefas gerencia uma lista de tarefas. O script realiza as seguintes operações:

Criação de um array vazio: É criado um array chamado tarefas onde as tarefas serão armazenadas.
Adicionar tarefas: Usando o método .push(), três tarefas são adicionadas ao array.
Remover a última tarefa: A última tarefa adicionada é removida utilizando o método .pop().
Exibir o resultado: O array resultante é exibido no console, mostrando as tarefas restantes após a remoção.
Código Completo:
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
  

---

O que foi pedido pela questão:
Questão 2:

Crie um script que gerencie um estoque. O script deve:

Criar um array estoque com 4 itens iniciais.
Atualizar o segundo item no array.
Exibir o número total de itens no estoque usando .length.
Requisitos:

Documentar a função usando JSDoc.
O que eu fiz :

Descrição do que foi feito:

A função gerenciarEstoque gerencia um array de itens de estoque. O script realiza as seguintes operações:

Criação do array estoque com 4 itens iniciais: O array começa com 4 produtos.
Atualização do segundo item: O segundo item do array (com índice 1) é atualizado para um novo valor.
Exibição do número total de itens no estoque: O número de itens no estoque é mostrado no console usando o método .length.
Código Completo:
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

---

O que foi pedido pela questão:
Questão 3:

Crie um script que armazene as notas de três alunos em um array aninhado. O script deve:

Criar um array alunos onde cada elemento é um array contendo as notas de um aluno.
Usar um loop aninhado para calcular a média das notas de cada aluno.
Exibir o nome de cada aluno e sua respectiva média.
Requisitos:

Utilizar loops for e arrays aninhados.
Documentar o script usando JSDoc.
O que eu fiz:

Descrição do que foi feito:

A função calcularMediaAlunos calcula a média das notas de três alunos, utilizando um array aninhado. O script realiza as seguintes operações:

Criação do array alunos: Cada aluno tem seu nome no primeiro índice e as suas notas a seguir.
Uso de um loop aninhado: O loop externo percorre os alunos e o loop interno percorre as notas de cada aluno.
Cálculo da média: As notas de cada aluno são somadas, e a média é calculada.
Exibição do nome e média do aluno: O nome de cada aluno e sua respectiva média são exibidos no console.
Código Completo:
/**
 * Função que calcula a média das notas de três alunos e exibe o nome de cada aluno com sua média.
 * 
 * A função utiliza um array aninhado, onde cada elemento do array principal é um array contendo as notas de um aluno.
 * Um loop aninhado é utilizado para calcular a média de cada aluno e exibir os resultados.
 * 
 * @returns {void} Não retorna nenhum valor, apenas exibe o nome dos alunos e suas respectivas médias.
 */
function calcularMediaAlunos() {
    // 1. Criação de um array com as notas de três alunos
    const alunos = [
      ["João", 7, 8, 9],    // Aluno 1: João, com notas 7, 8, 9
      ["Maria", 10, 9, 8],  // Aluno 2: Maria, com notas 10, 9, 8
      ["Pedro", 6, 7, 5]    // Aluno 3: Pedro, com notas 6, 7, 5
    ];
  
    // 2. Loop para calcular a média das notas de cada aluno
    for (let i = 0; i < alunos.length; i++) {
      let nome = alunos[i][0]; // Nome do aluno (primeiro elemento do array)
      let notas = alunos[i].slice(1); // Notas do aluno (restante do array após o nome)
      
      let soma = 0;
      
      // Loop interno para somar as notas do aluno
      for (let j = 0; j < notas.length; j++) {
        soma += notas[j];
      }
  
      // Calculando a média das notas
      let media = soma / notas.length;
  
      // Exibindo o nome do aluno e sua média
      console.log(`Aluno: ${nome}, Média: ${media.toFixed(2)}`);
    }
  }
  
  // Chamando a função para calcular as médias dos alunos
  calcularMediaAlunos();

  ---


O que foi pedido pela questão:
Questão 4:

Crie um script que leia um array de palavras e exiba cada palavra no console em ordem reversa. O script deve:

Criar um array palavras com pelo menos 5 palavras.
Usar um loop for reverso para exibir cada palavra no console.
Documentar a função usando JSDoc.
O que eu fiz:
Descrição do que foi feito:

A função exibirPalavrasReverso recebe um array de palavras como argumento e exibe essas palavras no console em ordem reversa. O script realiza as seguintes operações:

Criação do array palavras: O array palavras é passado como argumento para a função, contendo as palavras a serem exibidas.
Uso de um loop for reverso: O loop percorre o array de palavras de trás para frente (do último índice para o primeiro).
Exibição no console: Cada palavra do array é exibida no console, começando da última até a primeira.
Código Completo:
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

  ---

  O que foi pedido pela questão:
Questão 5:

Crie um script que peça ao usuário para adivinhar um número entre 1 e 10. O script deve:

Continuar pedindo números até que o usuário acerte.
Parar imediatamente se o usuário digitar "sair".
Exibir mensagens para respostas corretas e para o comando "sair".
Requisitos:

Usar um loop while.
Documentar a função usando JSDoc.
O que eu fiz:
Você criou a função jogoAdivinhacao() que implementa o jogo de adivinhação. A função realiza as seguintes operações:

Solicitação de um número ao usuário: A função pede ao usuário para adivinhar um número entre 1 e 10, mantendo o loop ativo até que a resposta esteja correta ou o usuário digite "sair".
Verificação de acerto: O script verifica se o número adivinhado está correto.
Verificação do comando "sair": Se o usuário digitar "sair", o loop é interrompido imediatamente.
Exibição de mensagens: Mensagens são exibidas para o usuário, indicando se ele acertou o número ou se deseja sair do jogo.
Código Completo:
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
  
Chamando a função para iniciar o jogo
jogoAdivinhacao();