import { Request, Response } from "express";
import Descuento from "../models/descuentosModels";

//get all
export const getDescuentos = async( req: Request, res: Response)=> {
const descuentos = await Descuento.findAll();

    res.json(
      descuentos
    );
}
//get 
export const getDescuento = async( req: Request, res: Response)=> {


    const { id } = req.params;
    const descuento = await Descuento.findByPk(id);
    res.json(
        descuento
    );
}
//post 
export const postDescuento = async( req: Request, res: Response)=> {

    const { body } = req;
    
    try{
        const existeDescuento = await Descuento.findOne({
            where: { nombre: body.nombre}
        });

        if(existeDescuento){
            return res.status(400).json({
                msg:'Ya existe el producto ' + body.nombre
            })
        }

        const descuento = new Descuento(body);
        await descuento.save();
        res.json(descuento);
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:'error al crear',
        });
    
   
}
}
//update
export const putDescuento = async( req: Request, res: Response)=> {
    const { id } = req.params;
    const { body } = req;
    
    try{
        const descuento = await Descuento.findByPk(id);

        if(!descuento){
            return res.status(404).json({
                msg:'No existe el producto ' + id
            })
        }
        await descuento.update(body);
        res.json(descuento);
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:'error al actualizar',
        });
    
   
}
}
//delete
export const deleteDescuento = async( req: Request, res: Response)=> {
    const { id } = req.params;

    try{
        const descuento = await Descuento.findByPk(id);

        if(!descuento){
            return res.status(404).json({
                msg:'No existe el producto ' + id
            })
        }
        await descuento.destroy();
        res.json({msg:'El producto ha sido eliminado'});
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:'error al eliminar',
        });
    
   
}
}
