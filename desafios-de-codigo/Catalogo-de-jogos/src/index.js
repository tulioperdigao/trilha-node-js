// Entradas:
// 2 | SimCity | Prince of Persia
// 3 | Tetris | Doom | Pong
// 2 | Portal | Limbo

import print from "../../Gerenciamento-de-tarefas/src/utils/functions";

// Pergunta ao usuário quantos jogos deseja adicionar
let quantidadeJogos = 3;

// TODO: Inicializa os arrays com base na quantidade informada pelo usuário:
const nomesJogos = [];

// TODO: Crie um Loop para adicionar jogos conforme a quantidade especificada:
for (let i = 0; i < quantidadeJogos; i++) {
    let nomeJogo = gets(); // entrada do usuário
    adicionarJogo(nomes, nomeJogo) 
}

// Exibe o resumo da adição de jogos
exibirResumoAdicaoJogos(quantidadeJogos, nomesJogos);


// TODO: Crie uma função adicionarJogo:
function adicionarJogo(lista,jogo) {
  lista.push(jogo);
}

function exibirResumoAdicaoJogos(quantidadeJogos, nomes) {
    print(`\nFoi adicionado '${quantidadeJogos}' jogos: ${nomes.join(", ")} ao catalogo.`);
}