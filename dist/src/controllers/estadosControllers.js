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
exports.deleteEstado = exports.putEstado = exports.postEstado = exports.getEstado = exports.getEstados = void 0;
const estadosModels_1 = __importDefault(require("../models/estadosModels"));
//get all
const getEstados = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const estados = yield estadosModels_1.default.findAll();
    res.json(estados);
});
exports.getEstados = getEstados;
//get 
const getEstado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const estado = yield estadosModels_1.default.findByPk(id);
    res.json(estado);
});
exports.getEstado = getEstado;
//post 
const postEstado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existe = yield estadosModels_1.default.findOne({
            where: { nombre: body.nombre }
        });
        if (existe) {
            return res.status(400).json({
                msg: 'Ya existe el Estado ' + body.nombre
            });
        }
        const estado = new estadosModels_1.default(body);
        yield estado.save();
        res.json(estado);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'error al crear',
        });
    }
});
exports.postEstado = postEstado;
//update
const putEstado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const estado = yield estadosModels_1.default.findByPk(id);
        if (!estado) {
            return res.status(404).json({
                msg: 'No existe el Estado ' + id
            });
        }
        yield estado.update(body);
        res.json(estado);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'error al actualizar',
        });
    }
});
exports.putEstado = putEstado;
//delete
const deleteEstado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const estado = yield estadosModels_1.default.findByPk(id);
        if (!estado) {
            return res.status(404).json({
                msg: 'No existe el Estado ' + id
            });
        }
        yield estado.destroy();
        res.json({ msg: 'El Estado ha sido eliminado' });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'error al actualizar',
        });
    }
});
exports.deleteEstado = deleteEstado;
//# sourceMappingURL=estadosControllers.js.map