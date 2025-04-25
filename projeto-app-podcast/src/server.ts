import * as http from 'http';
import dotenv from 'dotenv';
import {getFilterEpisodes, getListEpisodes} from './controllers/podcasts-controller';

dotenv.config();

const port = process.env.PORT;

const server = http.createServer(
    async (req: http.IncomingMessage, res: http.ServerResponse) => {
        
        // Listar podcasts
        if(req.method === 'GET' && req.url === "/api/list") {
            await getListEpisodes(req, res);
        }

        if(req.method === 'GET' && req.url === "/api/episode") {
            await getFilterEpisodes(req, res);
        }

    }
);

server.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}.`)
})