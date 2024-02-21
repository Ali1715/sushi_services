"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const estadosControllers_1 = require("../src/controllers/estadosControllers");
const router = (0, express_1.Router)();
// Rutas para productos
router.get('/', estadosControllers_1.getEstados);
router.post('/', estadosControllers_1.postEstado);
router.get('/:id', estadosControllers_1.getEstado);
router.put('/:id', estadosControllers_1.putEstado);
router.delete('/:id', estadosControllers_1.deleteEstado);
exports.default = router;
//# sourceMappingURL=estadosRoutes.js.map