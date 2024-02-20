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
exports.deleteCliente = exports.putCliente = exports.postCliente = exports.getCliente = exports.getClientes = void 0;
const clientesModels_1 = __importDefault(require("../models/clientesModels"));
//get all
const getClientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clientes = yield clientesModels_1.default.findAll();
    res.json(clientes);
});
exports.getClientes = getClientes;
//get 
const getCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const cliente = yield clientesModels_1.default.findByPk(id);
    res.json(cliente);
});
exports.getCliente = getCliente;
//post 
const postCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeSushi = yield clientesModels_1.default.findOne({
            where: { nombre: body.nombre }
        });
        if (existeSushi) {
            return res.status(400).json({
                msg: 'Ya existe el Cliente ' + body.nombre
            });
        }
        const cliente = new clientesModels_1.default(body);
        yield cliente.save();
        res.json(cliente);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'error al crear',
        });
    }
});
exports.postCliente = postCliente;
//update
const putCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const cliente = yield clientesModels_1.default.findByPk(id);
        if (!cliente) {
            return res.status(404).json({
                msg: 'No existe el Cliente ' + id
            });
        }
        yield cliente.update(body);
        res.json(clientesModels_1.default);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'error al actualizar',
        });
    }
});
exports.putCliente = putCliente;
//delete
const deleteCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const cliente = yield clientesModels_1.default.findByPk(id);
        if (!cliente) {
            return res.status(404).json({
                msg: 'No existe el Cliente ' + id
            });
        }
        yield cliente.destroy();
        res.json({ msg: 'El Cliente ha sido eliminado' });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'error al actualizar',
        });
    }
});
exports.deleteCliente = deleteCliente;
//# sourceMappingURL=clientesControllers.js.map