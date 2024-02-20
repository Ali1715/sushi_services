"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conection_1 = __importDefault(require("../../config/conection"));
conection_1.default;
const Pago = conection_1.default.define('pago', {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true // Assuming you want an auto-incrementing primary key
    },
    qr_img: {
        type: sequelize_1.DataTypes.STRING
    },
    pedido_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    monto: {
        type: sequelize_1.DataTypes.DOUBLE
    }
});
exports.default = Pago;
//# sourceMappingURL=pagosModels.js.map