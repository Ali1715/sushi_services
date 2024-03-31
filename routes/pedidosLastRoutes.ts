import { Router } from "express";
import { getTheLastPedido } from "../src/controllers/pedidosControllers"; 

const router= Router();

// Rutas para productos
router.get('/', getTheLastPedido);



export default router;