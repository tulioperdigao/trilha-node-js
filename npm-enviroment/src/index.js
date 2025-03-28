import connectToDatabase from "./database/data.js";
import dotenv from 'dotenv';

dotenv.config({path:'.env.prod'});

console.log(process.env.USERDATABASE);

async function main() {
await connectToDatabase("naruto", "uzumaki123");
}

main();