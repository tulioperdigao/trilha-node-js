// Entradas:
// Backup Noturno | Executar backup automatico de servidores as 2h da madrugada
// Monitoramento de Rede | Configurar alertas para trafego em tempo real | 18/12
// Atualizacao de Software | Aplicar patches | 22/12

import print from "./utils/functions.js";

let titulo = "Monitoramento de Rede";
let descricao = "Configurar alertas para trafego em tempo real";
let dataVencimento = "18/12"

if (descricao.length > 50) {
    console.log(descricao.length);
    print("Descricao ultrapassa limite de caracteres.");
} else {
    print(`${titulo}\n${descricao} ate ${dataVencimento}`)
}