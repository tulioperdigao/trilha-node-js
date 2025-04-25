import * as http from 'http';
import dotenv from 'dotenv';
import {getFilterEpisodes, getListEpisodes} from './controllers/podcasts-controller';

dotenv.config();

const port = process.env.PORT;

const server = http.createServer(
    async (req: http.IncomingMessage, res: http.ServerResponse) => {

        // queryString -> Texto pra consulta
        // http://localhost:3333/api/episode?p=flow
        const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""];
        
        // Listar Podcasts
        if(req.method === 'GET' && baseUrl === "/api/list") {
            await getListEpisodes(req, res);
        }


        // Filtrar Episódios
        if(req.method === 'GET' && baseUrl === "/api/episode") {
            await getFilterEpisodes(req, res);
        }

    }
);

server.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}.`)
})