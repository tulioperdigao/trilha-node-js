// quais ações meu carrinho pode fazer

// CASOS DE USO
// -> adicionar Item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
};

// -> calcular o total
async function calculateTotal(userCart) {
    console.log(userCart.reduce((total, item) => total + item.subtotal(), 0));
};

// -> remover um Item - diminui um item
async function removeItem(userCart, index) {
    
};

// -> deletar Item do carrinho
async function deleteItem(userCart, nameItem) {
    const index = userCart.findIndex((item) => item.name === nameItem);

    if (index !== -1) {
        userCart.splice(index, 1);
    }
};

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem
}

