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
exports.deleteDetPedido = exports.putDetPedido = exports.postDetPedido = exports.getDetPedido = exports.getDetPedidos = void 0;
const detPedidoModels_1 = __importDefault(require("../models/detPedidoModels"));
//get all
const getDetPedidos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const detpedidos = yield detPedidoModels_1.default.findAll();
    res.json(detpedidos);
});
exports.getDetPedidos = getDetPedidos;
//get 
const getDetPedido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const detpedido = yield detPedidoModels_1.default.findByPk(id);
    res.json(detpedido);
});
exports.getDetPedido = getDetPedido;
//post 
const postDetPedido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeDetPedido = yield detPedidoModels_1.default.findOne({
            where: { id: body.id }
        });
        if (existeDetPedido) {
            return res.status(400).json({
                msg: 'Ya existe el detpedido ' + body.id
            });
        }
        const detpedido = new detPedidoModels_1.default(body);
        yield detpedido.save();
        res.json(detpedido);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'error al crear',
        });
    }
});
exports.postDetPedido = postDetPedido;
//update
const putDetPedido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const detpedido = yield detPedidoModels_1.default.findByPk(id);
        if (!detpedido) {
            return res.status(404).json({
                msg: 'No existe el detpedido ' + id
            });
        }
        yield detpedido.update(body);
        res.json(detpedido);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'error al actualizar',
        });
    }
});
exports.putDetPedido = putDetPedido;
//delete
const deleteDetPedido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const detpedido = yield detPedidoModels_1.default.findByPk(id);
        if (!detpedido) {
            return res.status(404).json({
                msg: 'No existe el detpedido ' + id
            });
        }
        yield detpedido.destroy();
        res.json({ msg: 'El producto ha sido eliminado' });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'error al actualizar',
        });
    }
});
exports.deleteDetPedido = deleteDetPedido;
//# sourceMappingURL=detPedidosControllers.js.map