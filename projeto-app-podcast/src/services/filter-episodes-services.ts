import { repositoryPodcast } from "../repositories/podcasts-repository"
import { PodcastTransferModel } from "../models/filter-podcast-model";
import { StatusCode } from "../utils/status-code";



export const serviceFilterEpisodes = async (
    podcastName: string | undefined
):Promise<PodcastTransferModel> => {

    // Define a interface de retorno - contrato
    let respondeFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    };

    // Buscando os Dados
    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repositoryPodcast(queryString);

    // Verifica se tem conteúdo
    if (data.length !== 0) {
        respondeFormat.statusCode = StatusCode.OK;
    } else {
        respondeFormat.statusCode = StatusCode.NO_CONTENT;
    }

    respondeFormat.body = data;

    return respondeFormat;
}