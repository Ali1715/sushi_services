"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conection_1 = __importDefault(require("../../config/conection"));
conection_1.default;
const detPedido = conection_1.default.define('detalle_pedido', {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true // Assuming you want an auto-incrementing primary key
    },
    pedido_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    producto_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    cantidad: {
        type: sequelize_1.DataTypes.INTEGER
    },
    subtotal: {
        type: sequelize_1.DataTypes.DOUBLE
    }
});
// Sincronizar el modelo con la base de datos
conection_1.default.sync()
    .then(() => {
    console.log('Modelo sincronizado correctamente con la base de datos.');
})
    .catch(error => {
    console.error('Error al sincronizar el modelo con la base de datos:', error);
});
exports.default = detPedido;
//# sourceMappingURL=detPedidoModels.js.map