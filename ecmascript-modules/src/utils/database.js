async function connectToDatabase(dataName) {
    // lógica de conexão
    console.log(`Conectado com o banco: ${dataName}.`);
};

async function disconnectDatabase() {
    console.log("Desconectando do banco de dados.")
}

export {
    connectToDatabase,
    disconnectDatabase,
};