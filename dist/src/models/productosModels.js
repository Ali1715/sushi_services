"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conection_1 = __importDefault(require("../../config/conection"));
conection_1.default;
const Producto = conection_1.default.define('producto', {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true // Assuming you want an auto-incrementing primary key
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING
    },
    precio: {
        type: sequelize_1.DataTypes.DOUBLE
    },
    imagen: {
        type: sequelize_1.DataTypes.STRING
    },
    stock: {
        type: sequelize_1.DataTypes.INTEGER
    },
    categoria_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    descuento_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
});
exports.default = Producto;
//# sourceMappingURL=productosModels.js.map