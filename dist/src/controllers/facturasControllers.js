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
exports.deleteProducto = exports.putProducto = exports.postProducto = exports.getProducto = exports.getProductos = void 0;
const productosModels_1 = __importDefault(require("../models/productosModels"));
//get all
const getProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productos = yield productosModels_1.default.findAll();
    res.json(productos);
});
exports.getProductos = getProductos;
//get 
const getProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const producto = yield productosModels_1.default.findByPk(id);
    res.json(producto);
});
exports.getProducto = getProducto;
//post 
const postProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeSushi = yield productosModels_1.default.findOne({
            where: { nombre: body.nombre }
        });
        if (existeSushi) {
            return res.status(400).json({
                msg: 'Ya existe el producto ' + body.nombre
            });
        }
        const producto = new productosModels_1.default(body);
        yield producto.save();
        res.json(producto);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'error al crear',
        });
    }
});
exports.postProducto = postProducto;
//update
const putProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const producto = yield productosModels_1.default.findByPk(id);
        if (!producto) {
            return res.status(404).json({
                msg: 'No existe el producto ' + id
            });
        }
        yield producto.update(body);
        res.json(producto);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'error al actualizar',
        });
    }
});
exports.putProducto = putProducto;
//delete
const deleteProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const producto = yield productosModels_1.default.findByPk(id);
        if (!producto) {
            return res.status(404).json({
                msg: 'No existe el producto ' + id
            });
        }
        yield producto.destroy();
        res.json({ msg: 'El producto ha sido eliminado' });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'error al actualizar',
        });
    }
});
exports.deleteProducto = deleteProducto;
//# sourceMappingURL=facturasControllers.js.map