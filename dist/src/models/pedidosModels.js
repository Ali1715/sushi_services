"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conection_1 = __importDefault(require("../../config/conection"));
conection_1.default;
const Pedido = conection_1.default.define('pedido', {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true // Assuming you want an auto-incrementing primary key
    },
    costo_env: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2)
    },
    estado_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    cliente_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    direccion: {
        type: sequelize_1.DataTypes.DOUBLE
    },
    total: {
        type: sequelize_1.DataTypes.DOUBLE
    }
});
exports.default = Pedido;
//# sourceMappingURL=pedidosModels.js.map