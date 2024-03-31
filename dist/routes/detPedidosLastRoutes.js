"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const detPedidosLastControllers_1 = require("../src/controllers/detPedidosLastControllers");
const router = (0, express_1.Router)();
// Rutas para productos
router.get('/', detPedidosLastControllers_1.getTheLastDetPedido);
exports.default = router;
//# sourceMappingURL=detPedidosLastRoutes.js.map