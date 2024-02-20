import { Request, Response } from "express";
import Categoria from "../models/categoriasModels";

//get all
export const getCategorias = async( req: Request, res: Response)=> {
const categorias = await Categoria.findAll();

    res.json(
      categorias
    );
}
//get 
export const getCategoria = async( req: Request, res: Response)=> {


    const { id } = req.params;
    const categoria = await Categoria.findByPk(id);
    res.json(
        categoria
    );
}
//post 
export const postCategoria = async( req: Request, res: Response)=> {

    const { body } = req;
    
    try{
        const existe = await Categoria.findOne({
            where: { nombre: body.nombre}
        });

        if(existe){
            return res.status(400).json({
                msg:'Ya existe el descuento ' + body.nombre
            })
        }

        const categoria = new Categoria(body);
        await categoria.save();
        res.json(categoria);
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:'error al crear',
        });
    
   
}
}
//update
export const putCategoria = async( req: Request, res: Response)=> {
    const { id } = req.params;
    const { body } = req;
    
    try{
        const categoria = await Categoria.findByPk(id);

        if(!categoria){
            return res.status(404).json({
                msg:'No existe el descuento ' + id
            })
        }
        await categoria.update(body);
        res.json(categoria);
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:'error al actualizar',
        });
    
   
}
}
//delete
export const deleteCategoria = async( req: Request, res: Response)=> {
    const { id } = req.params;

    try{
        const categoria = await Categoria.findByPk(id);

        if(!categoria){
            return res.status(404).json({
                msg:'No existe el descuento ' + id
            })
        }
        await categoria.destroy();
        res.json({msg:'El descuento ha sido eliminado'});
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:'error al actualizar',
        });
    
   
}
}
