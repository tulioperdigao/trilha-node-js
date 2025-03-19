// Busca apenas aquelas funções que vou usar
const {getFullName, productType} = require("./services/products");

// Busca TODAS as funções do módulo(arquivo)
const products = require("./services/products");

const config = require("./services/config");
const dataBase = require("./services/database");

async function main() {
    console.log("Carrinho de compras:");

    getFullName("408", "mousepad");
    console.log(productType);

    // getFullName("565", "mouse");
    // product.getProductLabel("Teclado Gamer");


    dataBase.connectToDatabase("MongoDB");
}

main();