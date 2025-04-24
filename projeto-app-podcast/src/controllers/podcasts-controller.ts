import {IncomingMessage, ServerResponse} from 'http';


export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify(
        [
            {
                podcastName: "flow",
                episode: "CBUM - Flow #319",
                videoId: "pQSuQmUfS30",
                categories: ["saúde", "bodybuilder", "esporte"]
            },
            {
                podcastName: "flow",
                episode: "SERGIO SACANI E BRENO MASI - Flow #434",
                videoId: "9i3bTzbYHAg",
                categories: ["ciência", "humor"]
            }
        ]
    ))
}