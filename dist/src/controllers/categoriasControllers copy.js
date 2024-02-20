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
exports.deleteCategoria = exports.putCategoria = exports.postCategoria = exports.getCategoria = exports.getCategorias = void 0;
const categoriasModels_1 = __importDefault(require("../models/categoriasModels"));
//get all
const getCategorias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categorias = yield categoriasModels_1.default.findAll();
    res.json(categorias);
});
exports.getCategorias = getCategorias;
//get 
const getCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const categoria = yield categoriasModels_1.default.findByPk(id);
    res.json(categoria);
});
exports.getCategoria = getCategoria;
//post 
const postCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existe = yield categoriasModels_1.default.findOne({
            where: { nombre: body.nombre }
        });
        if (existe) {
            return res.status(400).json({
                msg: 'Ya existe el producto ' + body.nombre
            });
        }
        const categoria = new categoriasModels_1.default(body);
        yield categoria.save();
        res.json(categoria);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'error al crear',
        });
    }
});
exports.postCategoria = postCategoria;
//update
const putCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const categoria = yield categoriasModels_1.default.findByPk(id);
        if (!categoria) {
            return res.status(404).json({
                msg: 'No existe el producto ' + id
            });
        }
        yield categoria.update(body);
        res.json(categoria);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'error al actualizar',
        });
    }
});
exports.putCategoria = putCategoria;
//delete
const deleteCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const categoria = yield categoriasModels_1.default.findByPk(id);
        if (!categoria) {
            return res.status(404).json({
                msg: 'No existe el producto ' + id
            });
        }
        yield categoria.destroy();
        res.json({ msg: 'El producto ha sido eliminado' });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'error al actualizar',
        });
    }
});
exports.deleteCategoria = deleteCategoria;
//# sourceMappingURL=categoriasControllers%20copy.js.map