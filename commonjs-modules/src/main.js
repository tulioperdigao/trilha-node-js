const p = require("./services/products")
const config = require("./services/config")

async function main() {
    console.log("Carrinho de compras:");

    // p.getFullName("408", "mousepad");
    // p.getFullName("565", "mouse");
    // p.getProductLabel("Teclado Gamer");

    console.log(config.devArea);
    console.log(config.client)
}

main();