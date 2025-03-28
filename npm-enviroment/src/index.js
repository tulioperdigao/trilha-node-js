import connectToDatabase from "./database/data.js";
import dotenv from 'dotenv';

dotenv.config()

async function main() {
    await connectToDatabase(process.env.USERDATABASE, process.env.PASSWORDDATABASE);
}

main();