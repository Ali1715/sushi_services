"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pedidosControllers_1 = require("../src/controllers/pedidosControllers");
const router = (0, express_1.Router)();
// Rutas para productos
router.get('/', pedidosControllers_1.getTheLastPedido);
exports.default = router;
//# sourceMappingURL=pedidosLastRoutes.js.map