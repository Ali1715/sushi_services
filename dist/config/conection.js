"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// conection.js
const sequelize_1 = require("sequelize");
const dbHost = process.env.DB_HOST || 'viaduct.proxy.rlwy.net';
const dbName = process.env.DB_NAME || 'railway';
const username = process.env.DB_USER || 'root';
const password = process.env.DB_PASSWORD || 'eFdHGD22c-dH11d6bCbCFcc-BCaH3-B1';
const dbPort = process.env.DB_PORT || '44717';
const dbPortNumber = parseInt(dbPort, 10);
const db = new sequelize_1.Sequelize(dbName, username, password, {
    host: dbHost,
    dialect: 'mysql',
    port: dbPortNumber,
    //logging: false,
});
exports.default = db;
//# sourceMappingURL=conection.js.map