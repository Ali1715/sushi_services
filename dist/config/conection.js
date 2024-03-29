"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// conection.js
const sequelize_1 = require("sequelize");
const dbHost = "bexmxb8rvdjvmvcw1gk1-mysql.services.clever-cloud.com";
const dbName = "bexmxb8rvdjvmvcw1gk1";
const username = "uyly5lcjcyerfmnq";
const password = "eEm0iureFKRFZ574xOUG";
const dbPort = "3306";
const dbPortNumber = parseInt(dbPort, 10);
const db = new sequelize_1.Sequelize(dbName, username, password, {
    host: dbHost,
    dialect: 'mysql',
    port: dbPortNumber,
    //logging: false,
});
exports.default = db;
//# sourceMappingURL=conection.js.map