import fastify from 'fastify';
import { request } from 'http';

const server = fastify({ logger: true });

const teams = [
    {
        id: 1,
        name: 'Ferrari',
        country: 'Itália'
    },
    {
        id: 2,
        name: 'McLaren',
        country: 'Reino Unido'
    },
    {
        id: 3,
        name: 'Mercedes',
        country: 'Alemanha'
    },
    {
        id: 4,
        name: 'Red Bull Racing',
        country: 'Áustria'
    }
];

const drivers = [
    {
        id: 1,
        name: 'Max Verstappen',
        team: 'Red Bull Racing'
    },
    {
        id: 2,
        name: 'Lewis Hamilton',
        team: 'Mercedes'
    },
    {
        id: 3,
        name: 'Lando Norris',
        team: 'McLaren'
    },
    {
        id: 4,
        name: 'Charles Leclerc',
        team: 'Ferrari'
    }
]

server.get('/teams', async(request, Response) => {
    Response.type("application/json").code(200);
    return {teams};
})

server.get('/drivers', async (request, Response) => {
    Response.type("application/json").code(200);
    return {drivers}
})

interface DriverParams {
    id: string
}

server.get<{Params: DriverParams}>('/drivers/:id', async (request, Response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find( d => d.id === id)

    if (!driver) {
        Response.type("application/json").code(404);
        return {message: "Driver Not Found"}
    } else {
        Response.type("application/json").code(200);
        return {driver};
    }
})


server.listen({port: 3333}, () => {
    console.log("Servidor iniciado na porta 3333.")
})
