async function connectToDatabase(user, password) {
    if (user === "naruto" && password === "uzumaki123") {
        console.log("Conexão com o banco de dados estabelecida!");
    } else {
        console.log("Falha de login. Credenciais incorretas.");
    }
}

export default connectToDatabase;