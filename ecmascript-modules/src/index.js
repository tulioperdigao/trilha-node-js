import {disconnectDatabase, databaseType} from "./utils/database.js";


console.log("Hello, Ecma!");

disconnectDatabase();
console.log(databaseType.userType);
