import * as database from './utils/database.js';


console.log("Hello, Ecma!");

database.connectToDatabase("MongoDB");
database.disconnectDatabase();
