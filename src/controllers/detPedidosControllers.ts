import { Request, Response } from "express";
import detPedido from "../models/detPedidoModels";


//get all
export const getDetPedidos = async( req: Request, res: Response)=> {
const detpedidos = await detPedido.findAll();

    res.json(
        detpedidos
    );
}
//get 
export const getDetPedido = async( req: Request, res: Response)=> {


    const { id } = req.params;
    const detpedido = await detPedido.findByPk(id);
    res.json(
        detpedido
    );
}
//post 
export const postDetPedido = async( req: Request, res: Response)=> {

    const { body } = req;
    
    try{
        const existeDetPedido = await detPedido.findOne({
            where: { id: body.id}
        });

        if(existeDetPedido){
            return res.status(400).json({
                msg:'Ya existe el detpedido ' + body.id
            })
        }

        const detpedido = new detPedido(body);
        await detpedido.save();
        res.json(detpedido);
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:'error al crear',
        });
    
   
}
}
//update
export const putDetPedido = async( req: Request, res: Response)=> {
    const { id } = req.params;
    const { body } = req;
    
    try{
        const detpedido = await detPedido.findByPk(id);

        if(!detpedido){
            return res.status(404).json({
                msg:'No existe el detpedido ' + id
            })
        }
        await detpedido.update(body);
        res.json(detpedido);
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:'error al actualizar',
        });
    
   
}
}
//delete
export const deleteDetPedido = async( req: Request, res: Response)=> {
    const { id } = req.params;

    try{
        const detpedido = await detPedido.findByPk(id);

        if(!detpedido){
            return res.status(404).json({
                msg:'No existe el detpedido ' + id
            })
        }
        await detpedido.destroy();
        res.json({msg:'El producto ha sido eliminado'});
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:'error al actualizar',
        });
    
   
}
}
