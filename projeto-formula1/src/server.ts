import fastify from 'fastify';

const server = fastify({ logger: true });

server.get('/teams', async(request, Response) => {
    Response.type("application/json").code(200);
    return[
        {
            id: 1,
            name: 'ferrari'
        }
    ]
})

server.listen({port: 3333}, () => {
    console.log("Servidor iniciado na porta 3333.")
})
