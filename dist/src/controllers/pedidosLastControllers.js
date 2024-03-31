"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTheLastPedido = void 0;
const pedidosModels_1 = __importDefault(require("../models/pedidosModels"));
// get the last pedido
const getTheLastPedido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ultimoPedido = yield pedidosModels_1.default.findOne({
            order: [['createdAt', 'DESC']], // Ordena los pedidos por fecha de creación de forma descendente
        });
        if (ultimoPedido) {
            res.json(ultimoPedido);
        }
        else {
            res.status(404).send('No se encontró ningún pedido');
        }
    }
    catch (error) {
        console.error('Error al obtener el último pedido:', error);
        res.status(500).send('Error interno del servidor');
    }
});
exports.getTheLastPedido = getTheLastPedido;
//# sourceMappingURL=pedidosLastControllers.js.map