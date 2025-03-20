import {connectToDatabase, disconnectDatabase} from "./utils/database.js";


console.log("Hello, Ecma!");

connectToDatabase("MongoDB");
disconnectDatabase();
