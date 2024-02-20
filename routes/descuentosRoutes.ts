import { Router } from "express";
import { deleteDescuento, getDescuento, getDescuentos, postDescuento, putDescuento } from "../src/controllers/descuentosControllers";


const router= Router();

// Rutas para productos
router.get('/', getDescuentos);
router.post('/', postDescuento);
router.get('/:id', getDescuento);
router.put('/:id', putDescuento);
router.delete('/:id', deleteDescuento);

export default router;