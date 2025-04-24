import * as http from 'http';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;

const server = http.createServer(
    (request: http.IncomingMessage, response: http.ServerResponse) => {}
);

server.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}.`)
})