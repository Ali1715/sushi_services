import { Router } from "express";
import { getTheLastDetPedido } from "../src/controllers/detPedidosLastControllers"; 

const router= Router();

// Rutas para productos
router.get('/', getTheLastDetPedido);



export default router;