"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pedidosControllers_1 = require("../src/controllers/pedidosControllers");
const router = (0, express_1.Router)();
// Rutas para productos
router.get('/', pedidosControllers_1.getPedidos);
router.post('/', pedidosControllers_1.postPedido);
router.get('/:id', pedidosControllers_1.getPedido);
router.put('/:id', pedidosControllers_1.putPedido);
router.delete('/:id', pedidosControllers_1.deletePedido);
exports.default = router;
//# sourceMappingURL=pedidosRoutes.js.map