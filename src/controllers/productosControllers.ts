import { Request, Response } from "express";
import Producto from "../models/productosModels";

//get all
export const getProductos = async( req: Request, res: Response)=> {
const productos = await Producto.findAll();

    res.json(
      productos
    );
}
//get 
export const getProducto = async( req: Request, res: Response)=> {


    const { id } = req.params;
    const producto = await Producto.findByPk(id);
    res.json(
        producto
    );
}
//post 
export const postProducto = async( req: Request, res: Response)=> {

    const { body } = req;
    
    try{
        const existeSushi = await Producto.findOne({
            where: { nombre: body.nombre}
        });

        if(existeSushi){
            return res.status(400).json({
                msg:'Ya existe el producto ' + body.nombre
            })
        }

        const producto = new Producto(body);
        await producto.save();
        res.json(producto);
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:'error al crear',
        });
    
   
}
}
//update
export const putProducto = async( req: Request, res: Response)=> {
    const { id } = req.params;
    const { body } = req;
    
    try{
        const producto = await Producto.findByPk(id);

        if(!producto){
            return res.status(404).json({
                msg:'No existe el producto ' + id
            })
        }
        await producto.update(body);
        res.json(producto);
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:'error al actualizar',
        });
    
   
}
}
//delete
export const deleteProducto = async( req: Request, res: Response)=> {
    const { id } = req.params;

    try{
        const producto = await Producto.findByPk(id);

        if(!producto){
            return res.status(404).json({
                msg:'No existe el producto ' + id
            })
        }
        await producto.destroy();
        res.json({msg:'El producto ha sido eliminado'});
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:'error al actualizar',
        });
    
   
}
}
