//Entradas:
// Espada | Escudo | Poção
// Gema | Flecha | Capa
// Masterball | Potion | Elixir

import print from "../../Gerenciamento-de-tarefas/src/utils/functions";

const itens = [];

//TODO: Solicite os itens ao usuário
for (let i = 0; i < 3; i++) {
    let receberItem = gets();
    itens.push(receberItem);
    
}

// Exibe a lista de itens
print("Lista de itens:");
for (let i = 0; i < itens.length; i++) {
  print(`- ${itens[i]}`);
}