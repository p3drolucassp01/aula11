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
  