const product = require("./services/products")
const config = require("./services/config")
const dataBase = require("./services/database")

async function main() {
    console.log("Carrinho de compras:");

    // p.getFullName("408", "mousepad");
    // p.getFullName("565", "mouse");
    // p.getProductLabel("Teclado Gamer");

    // product.getFullName("568", "Caixa de madeira");

    // console.log(config.devArea);
    // console.log(config.client);

    dataBase.connectToDatabase("MongoDB");
}

main();