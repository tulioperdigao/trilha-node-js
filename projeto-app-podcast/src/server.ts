import * as http from 'http';
import dotenv from 'dotenv';
import {getFilterEpisodes, getListEpisodes} from './controllers/podcasts-controller';
import { Routes } from './routes/routes';

dotenv.config();

const port = process.env.PORT;

const server = http.createServer(
    async (req: http.IncomingMessage, res: http.ServerResponse) => {

        // queryString -> Texto pra consulta
        // http://localhost:3333/api/episode?p=flow
        const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""];
        
        // Listar Podcasts
        if(req.method === 'GET' && baseUrl === Routes.LIST) {
            await getListEpisodes(req, res);
        }


        // Filtrar Episódios
        if(req.method === 'GET' && baseUrl === Routes.EPISODE) {
            await getFilterEpisodes(req, res);
        }

    }
);

server.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}.`)
})