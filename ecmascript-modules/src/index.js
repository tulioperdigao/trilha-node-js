import {disconnectDatabase, databaseType} from "./utils/database.js";
import * as api from "./utils/api.js";


console.log("Hello, Ecma!");

api.getDataFromApi();
console.log(api.key);
disconnectDatabase();
console.log(databaseType.userType);
