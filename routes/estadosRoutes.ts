import { Router } from "express";
import { deleteEstado, getEstado, getEstados, postEstado, putEstado } from "../src/controllers/estadosControllers";

const router= Router();

// Rutas para productos
router.get('/', getEstados);
router.post('/', postEstado);
router.get('/:id', getEstado);
router.put('/:id', putEstado);
router.delete('/:id', deleteEstado);

export default router;