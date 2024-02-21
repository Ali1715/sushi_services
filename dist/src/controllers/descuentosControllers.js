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
exports.deleteDescuento = exports.putDescuento = exports.postDescuento = exports.getDescuento = exports.getDescuentos = void 0;
const descuentosModels_1 = __importDefault(require("../models/descuentosModels"));
//get all
const getDescuentos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const descuentos = yield descuentosModels_1.default.findAll();
    res.json(descuentos);
});
exports.getDescuentos = getDescuentos;
//get 
const getDescuento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const descuento = yield descuentosModels_1.default.findByPk(id);
    res.json(descuento);
});
exports.getDescuento = getDescuento;
//post 
const postDescuento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeDescuento = yield descuentosModels_1.default.findOne({
            where: { nombre: body.nombre }
        });
        if (existeDescuento) {
            return res.status(400).json({
                msg: 'Ya existe el producto ' + body.nombre
            });
        }
        const descuento = new descuentosModels_1.default(body);
        yield descuento.save();
        res.json(descuento);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'error al crear',
        });
    }
});
exports.postDescuento = postDescuento;
//update
const putDescuento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const descuento = yield descuentosModels_1.default.findByPk(id);
        if (!descuento) {
            return res.status(404).json({
                msg: 'No existe el producto ' + id
            });
        }
        yield descuento.update(body);
        res.json(descuento);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'error al actualizar',
        });
    }
});
exports.putDescuento = putDescuento;
//delete
const deleteDescuento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const descuento = yield descuentosModels_1.default.findByPk(id);
        if (!descuento) {
            return res.status(404).json({
                msg: 'No existe el producto ' + id
            });
        }
        yield descuento.destroy();
        res.json({ msg: 'El producto ha sido eliminado' });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'error al eliminar',
        });
    }
});
exports.deleteDescuento = deleteDescuento;
//# sourceMappingURL=descuentosControllers.js.map