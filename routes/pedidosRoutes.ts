import { Router } from "express";
import { deletePedido, getPedido, getPedidos, postPedido, putPedido } from "../src/controllers/pedidosControllers"; 

const router= Router();

// Rutas para productos
router.get('/', getPedidos);
router.post('/', postPedido);
router.get('/:id', getPedido);
router.put('/:id', putPedido);
router.delete('/:id', deletePedido);


export default router;