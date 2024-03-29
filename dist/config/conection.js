"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// conection.js
const sequelize_1 = require("sequelize");
const dbHost = process.env.DB_HOST || 'bexmxb8rvdjvmvcw1gk1-mysql.services.clever-cloud.com';
const dbName = process.env.DB_NAME || 'bexmxb8rvdjvmvcw1gk1';
const username = process.env.DB_USER || 'uyly5lcjcyerfmnq';
const password = process.env.DB_PASSWORD || 'eEm0iureFKRFZ574xOUG';
const dbPort = process.env.DB_PORT || '3306';
const dbPortNumber = parseInt(dbPort, 10);
const db = new sequelize_1.Sequelize(dbName, username, password, {
    host: dbHost,
    dialect: 'mysql',
    port: dbPortNumber,
    //logging: false,
});
exports.default = db;
//# sourceMappingURL=conection.js.map