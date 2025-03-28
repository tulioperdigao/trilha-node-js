import connectToDatabase from "./database/data.js";
import dotenv from 'dotenv';

dotenv.config()

async function main() {
    console.log(process.env.USERDATABASE);
    // await connectToDatabase("sasuke", "uchiha");
}

main();