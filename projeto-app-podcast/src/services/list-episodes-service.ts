import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";



export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {

    // Define a interface de retorno - contrato
    let respondeFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    };

    // Buscando os Dados
    const data = await repositoryPodcast();

    // Verifica se tem conteúdo
    if (data.length !== 0) {
        respondeFormat.statusCode = StatusCode.OK;
    } else {
        respondeFormat.statusCode = StatusCode.NO_CONTENT;
    }

    respondeFormat.body = data;

    return respondeFormat;
}