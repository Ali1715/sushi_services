import { Request, Response } from "express";
import Pedido from "../models/pedidosModels";

//get all
export const getPedidos = async( req: Request, res: Response)=> {
const pedidos = await Pedido.findAll();

    res.json(
        pedidos
    );
}
//get 
export const getPedido = async( req: Request, res: Response)=> {


    const { id } = req.params;
    const pedido = await Pedido.findByPk(id);
    res.json(
        pedido
    );
}

// get the last pedido
export const getTheLastPedido = async (req: Request, res: Response) => {
    try {
        const ultimoPedido = await Pedido.findOne({
            order: [['createdAt', 'DESC']], // Ordena los pedidos por fecha de creación de forma descendente
        });

        if (ultimoPedido) {
            res.json(ultimoPedido);
        } else {
            res.status(404).send('No se encontró ningún pedido');
        }
    } catch (error) {
        console.error('Error al obtener el último pedido:', error);
        res.status(500).send('Error interno del servidor');
    }
};


//post 
export const postPedido = async( req: Request, res: Response)=> {

    const { body } = req;
    
    try{
        const existePedido = await Pedido.findOne({
            where: { id: body.id}
        });

        if(existePedido){
            return res.status(400).json({
                msg:'Ya existe el pedido ' + body.id
            })
        }

        const pedido = new Pedido(body);
        await pedido.save();
        res.json(pedido);
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:'error al crear',
        });
    
   
}
}
//update
export const putPedido = async( req: Request, res: Response)=> {
    const { id } = req.params;
    const { body } = req;
    
    try{
        const pedido = await Pedido.findByPk(id);

        if(!pedido){
            return res.status(404).json({
                msg:'No existe el pedido ' + id
            })
        }
        await pedido.update(body);
        res.json(pedido);
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:'error al actualizar',
        });
    
   
}
}
//delete
export const deletePedido = async( req: Request, res: Response)=> {
    const { id } = req.params;

    try{
        const pedido = await Pedido.findByPk(id);

        if(!pedido){
            return res.status(404).json({
                msg:'No existe el pedido ' + id
            })
        }
        await pedido.destroy();
        res.json({msg:'El pedido ha sido eliminado'});
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:'error al actualizar',
        });
    
   
}
}
