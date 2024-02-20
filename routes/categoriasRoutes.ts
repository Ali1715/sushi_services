import { Router } from "express";
import { getCategorias, getCategoria, postCategoria,putCategoria,deleteCategoria } from "../src/controllers/categoriasControllers"; 

const router= Router();

// Rutas para productos
router.get('/', getCategorias);
router.post('/', postCategoria);
router.get('/:id', getCategoria);
router.put('/:id', putCategoria);
router.delete('/:id', deleteCategoria);

export default router;