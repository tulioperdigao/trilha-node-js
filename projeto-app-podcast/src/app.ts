import http, { ServerResponse } from 'http';
import {getFilterEpisodes, getListEpisodes} from './controllers/podcasts-controller';
import { Routes } from './routes/routes';
import { HttpMethod } from './utils/http-methods';

export const app = async (
    request: http.IncomingMessage, 
    response: http.ServerResponse
) => {

    // queryString -> Texto pra consulta
    // http://localhost:3333/api/episode?p=flow
    const [baseUrl, queryString] = request.url?.split("?") ?? ["", ""];
    
    // Listar Podcasts
    if(request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(request, response);
    }


    // Filtrar Episódios
    if(request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
        await getFilterEpisodes(request, response);
    }

}