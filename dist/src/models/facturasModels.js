"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conection_1 = __importDefault(require("../../config/conection"));
conection_1.default;
const Factura = conection_1.default.define('factura', {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true // Assuming you want an auto-incrementing primary key
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    nit: {
        type: sequelize_1.DataTypes.INTEGER
    },
    pago_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    subtotal: {
        type: sequelize_1.DataTypes.DOUBLE
    },
    total: {
        type: sequelize_1.DataTypes.DOUBLE
    }
});
exports.default = Factura;
//# sourceMappingURL=facturasModels.js.map