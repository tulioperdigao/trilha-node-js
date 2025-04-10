import {getBaseEmail} from "./services/email";

async function main() {
    console.log(await getBaseEmail("Tugão"));
    console.log("Finalizado");
    console.log("...");
}

main()
