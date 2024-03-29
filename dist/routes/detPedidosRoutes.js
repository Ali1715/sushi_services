"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const detPedidosControllers_1 = require("../src/controllers/detPedidosControllers");
const router = (0, express_1.Router)();
// Rutas para productos
router.get('/', detPedidosControllers_1.getDetPedidos);
router.post('/', detPedidosControllers_1.postDetPedido);
router.get('/:id', detPedidosControllers_1.getDetPedido);
router.put('/:id', detPedidosControllers_1.putDetPedido);
router.delete('/:id', detPedidosControllers_1.deleteDetPedido);
exports.default = router;
//# sourceMappingURL=detPedidosRoutes.js.map