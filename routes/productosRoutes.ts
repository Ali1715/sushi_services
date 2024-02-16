import { Router } from "express";
import { getProductos, getProducto, postProducto,putProducto,deleteProducto } from "../src/controllers/productosControllers"; 

const router= Router();

// Rutas para productos
router.get('/', getProductos);
router.post('/', postProducto);
router.get('/:id', getProducto);
router.put('/:id', putProducto);
router.delete('/:id', deleteProducto);

export default router;