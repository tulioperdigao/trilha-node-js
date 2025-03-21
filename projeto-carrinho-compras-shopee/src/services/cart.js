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
async function removeItem(userCart, index) {
    // transforma o indice visual do usuario para o indice back-end
    const deleteIndex = index - 1

    // é maior do que zero e se é menor do que o tamanho do carrinho
    if(index >= 0 && index < userCart.length) {
        userCart.splice(deleteIndex, 1);
    }
};

// -> deletar Item do carrinho
async function deleteItem(userCart, nameItem) {
    const index = userCart.findIndex((item) => item.name === nameItem);

    if (index !== -1) {
        userCart.splice(index, 1);
    }
};

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

