"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conection_1 = __importDefault(require("../../config/conection"));
conection_1.default;
const Cliente = conection_1.default.define('cliente', {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true // Assuming you want an auto-incrementing primary key
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    contacto: {
        type: sequelize_1.DataTypes.INTEGER
    },
    correo: {
        type: sequelize_1.DataTypes.STRING
    }
});
exports.default = Cliente;
//# sourceMappingURL=clientesModels.js.map