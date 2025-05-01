import fastify from 'fastify';
import cors from '@fastify/cors';

const server = fastify({ logger: true });

server.register(cors, {
    origin: "*"
})

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
    },
    {
        id: 5,
        name: 'Aston Martin',
        country: 'Reino Unido'
    },
    {
        id: 6,
        name: 'Alpine',
        country: 'França'
    },
    {
        id: 7,
        name: 'Williams',
        country: 'Reino Unido'
    },
    {
        id: 8,
        name: 'Stake F1 Team Kick Sauber',
        country: 'Suíça'
    },
    {
        id: 9,
        name: 'Visa Cash App RB',
        country: 'Itália'
    },
    {
        id: 10,
        name: 'Haas',
        country: 'Estados Unidos'
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
        name: 'Sergio Pérez',
        team: 'Red Bull Racing'
    },
    {
        id: 3,
        name: 'Lewis Hamilton',
        team: 'Mercedes'
    },
    {
        id: 4,
        name: 'George Russell',
        team: 'Mercedes'
    },
    {
        id: 5,
        name: 'Charles Leclerc',
        team: 'Ferrari'
    },
    {
        id: 6,
        name: 'Carlos Sainz',
        team: 'Ferrari'
    },
    {
        id: 7,
        name: 'Lando Norris',
        team: 'McLaren'
    },
    {
        id: 8,
        name: 'Oscar Piastri',
        team: 'McLaren'
    },
    {
        id: 9,
        name: 'Fernando Alonso',
        team: 'Aston Martin'
    },
    {
        id: 10,
        name: 'Lance Stroll',
        team: 'Aston Martin'
    },
    {
        id: 11,
        name: 'Esteban Ocon',
        team: 'Alpine'
    },
    {
        id: 12,
        name: 'Pierre Gasly',
        team: 'Alpine'
    },
    {
        id: 13,
        name: 'Alexander Albon',
        team: 'Williams'
    },
    {
        id: 14,
        name: 'Logan Sargeant',
        team: 'Williams'
    },
    {
        id: 15,
        name: 'Valtteri Bottas',
        team: 'Stake F1 Team Kick Sauber'
    },
    {
        id: 16,
        name: 'Zhou Guanyu',
        team: 'Stake F1 Team Kick Sauber'
    },
    {
        id: 17,
        name: 'Yuki Tsunoda',
        team: 'Visa Cash App RB'
    },
    {
        id: 18,
        name: 'Daniel Ricciardo',
        team: 'Visa Cash App RB'
    },
    {
        id: 19,
        name: 'Kevin Magnussen',
        team: 'Haas'
    },
    {
        id: 20,
        name: 'Nico Hülkenberg',
        team: 'Haas'
    }
];


server.get('/teams', async(request, Response) => {
    Response.type("application/json").code(200);
    return {teams};
})

interface TeamParams {
    id: string
}

server.get<{Params: TeamParams}>('/teams/:id', async (request, Response) => {
    const id = parseInt(request.params.id);
    const team = teams.find( t => t.id === id );

    if (!team) {
        Response.type("application/json").code(404);
        return {message: "Team Not Found"}
    } else {
        Response.type("application/json").code(200);
        return {team};
    }
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
    const driver = drivers.find( d => d.id === id);

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
