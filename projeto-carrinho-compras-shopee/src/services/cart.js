// quais ações meu carrinho pode fazer

// CASOS DE USO
// -> adicionar Item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
};

// -> calcular o total
async function calculateTotal(userCart) {
    console.log("\nShoppe Cart TOTAL: " )
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`\n💵 Total: ${result}`)
};

// -> remover um Item - diminui um item
async function removeItem(userCart, item) {

    // 1. encontrar o índice do item
    const indexFound = userCart.findIndex((product) => product.name === item.name)

    // 2. caso não enocntre o item
    if (indexFound == -1) {
        console.log("Item não encontrado");
        return;
    }

    //3. item > 1 subtrair um item, item = 1 deletar o item
    if(userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    }

    // 4. caso item = 1 deletar o item
    if(userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);
        return;
    }
};

// -> deletar Item do carrinho
async function deleteItem(userCart, nameItem) {
    const index = userCart.findIndex((item) => item.name === nameItem);

    if (index !== -1) {
        userCart.splice(index, 1);
    }
};

// -> mostrar o carrinho
async function displayCart(userCart) {
    console.log("\nShopee Cart List: \n");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$${item.price} | Qtd: ${item.quantity} | Subtotal = ${item.subtotal()}`);
    })   
};

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
};

