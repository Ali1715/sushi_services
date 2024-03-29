import { Router } from "express";
import { getDetPedidos, getDetPedido, postDetPedido, putDetPedido, deleteDetPedido } from "../src/controllers/detPedidosControllers"; 

const router= Router();

// Rutas para productos
router.get('/', getDetPedidos);
router.post('/', postDetPedido);
router.get('/:id', getDetPedido);
router.put('/:id', putDetPedido);
router.delete('/:id', deleteDetPedido);

export default router;