"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const descuentosControllers_1 = require("../src/controllers/descuentosControllers");
const router = (0, express_1.Router)();
// Rutas para productos
router.get('/', descuentosControllers_1.getDescuentos);
router.post('/', descuentosControllers_1.postDescuento);
router.get('/:id', descuentosControllers_1.getDescuento);
router.put('/:id', descuentosControllers_1.putDescuento);
router.delete('/:id', descuentosControllers_1.deleteDescuento);
exports.default = router;
//# sourceMappingURL=descuentosRoutes.js.map