// todas as funções que lidam com produto

async function getFullName(codeId, productName) {
    console.log("\n");
    console.log("productX " + codeId + "--" + productName);
}

async function getProductLabel(productName) {
    console.log("Product " + productName);
}

module.exports = {
    getFullName, 
    getProductLabel,
}