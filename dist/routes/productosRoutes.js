"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productosControllers_1 = require("../src/controllers/productosControllers");
const router = (0, express_1.Router)();
// Rutas para productos
router.get('/', productosControllers_1.getProductos);
router.post('/', productosControllers_1.postProducto);
router.get('/:id', productosControllers_1.getProducto);
router.put('/:id', productosControllers_1.putProducto);
router.delete('/:id', productosControllers_1.deleteProducto);
exports.default = router;
//# sourceMappingURL=productosRoutes.js.map