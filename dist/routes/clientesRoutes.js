"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientesControllers_1 = require("../src/controllers/clientesControllers");
const router = (0, express_1.Router)();
// Rutas para productos
router.get('/', clientesControllers_1.getClientes);
router.post('/', clientesControllers_1.postCliente);
router.get('/:id', clientesControllers_1.getCliente);
router.put('/:id', clientesControllers_1.putCliente);
router.delete('/:id', clientesControllers_1.deleteCliente);
exports.default = router;
//# sourceMappingURL=clientesRoutes.js.map