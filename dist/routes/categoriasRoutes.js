"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoriasControllers_1 = require("../src/controllers/categoriasControllers");
const router = (0, express_1.Router)();
// Rutas para productos
router.get('/', categoriasControllers_1.getCategorias);
router.post('/', categoriasControllers_1.postCategoria);
router.get('/:id', categoriasControllers_1.getCategoria);
router.put('/:id', categoriasControllers_1.putCategoria);
router.delete('/:id', categoriasControllers_1.deleteCategoria);
exports.default = router;
//# sourceMappingURL=categoriasRoutes.js.map