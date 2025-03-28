import connectToDatabase from "./database/data.js";
import dotenv from 'dotenv';

dotenv.config({path:'.env.prod'});

async function main() {
await connectToDatabase("naruto", "uzumaki123");
}

main();