"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// conection.js
const sequelize_1 = require("sequelize");
const dbHost = process.env.DB_HOST || 'localhost';
const dbName = process.env.DB_NAME || 'sushi_db';
const username = process.env.DB_USER || 'root';
const password = process.env.DB_PASSWORD || '';
const db = new sequelize_1.Sequelize(dbName, username, password, {
    host: dbHost,
    dialect: 'mysql',
    //logging: false,
});
exports.default = db;
//# sourceMappingURL=conection.js.map