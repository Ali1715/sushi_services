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
exports.deletePedido = exports.putPedido = exports.postPedido = exports.getTheLastPedido = exports.getPedido = exports.getPedidos = void 0;
const pedidosModels_1 = __importDefault(require("../models/pedidosModels"));
//get all
const getPedidos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pedidos = yield pedidosModels_1.default.findAll();
    res.json(pedidos);
});
exports.getPedidos = getPedidos;
//get 
const getPedido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const pedido = yield pedidosModels_1.default.findByPk(id);
    res.json(pedido);
});
exports.getPedido = getPedido;
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
//post 
const postPedido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existePedido = yield pedidosModels_1.default.findOne({
            where: { id: body.id }
        });
        if (existePedido) {
            return res.status(400).json({
                msg: 'Ya existe el pedido ' + body.id
            });
        }
        const pedido = new pedidosModels_1.default(body);
        yield pedido.save();
        res.json(pedido);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'error al crear',
        });
    }
});
exports.postPedido = postPedido;
//update
const putPedido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const pedido = yield pedidosModels_1.default.findByPk(id);
        if (!pedido) {
            return res.status(404).json({
                msg: 'No existe el pedido ' + id
            });
        }
        yield pedido.update(body);
        res.json(pedido);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'error al actualizar',
        });
    }
});
exports.putPedido = putPedido;
//delete
const deletePedido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const pedido = yield pedidosModels_1.default.findByPk(id);
        if (!pedido) {
            return res.status(404).json({
                msg: 'No existe el pedido ' + id
            });
        }
        yield pedido.destroy();
        res.json({ msg: 'El pedido ha sido eliminado' });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'error al actualizar',
        });
    }
});
exports.deletePedido = deletePedido;
//# sourceMappingURL=pedidosControllers.js.map