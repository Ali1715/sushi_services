import { Router } from "express";
import { deleteCliente, getCliente, getClientes, postCliente, putCliente } from "../src/controllers/clientesControllers";

const router= Router();

// Rutas para productos
router.get('/', getClientes);
router.post('/', postCliente);
router.get('/:id', getCliente);
router.put('/:id', putCliente);
router.delete('/:id', deleteCliente);

export default router;