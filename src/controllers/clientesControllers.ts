import { Request, Response } from "express";
import Cliente from "../models/clientesModels";

//get all
export const getClientes = async( req: Request, res: Response)=> {
const clientes = await Cliente.findAll();

    res.json(
      clientes
    );
}
//get 
export const getCliente = async( req: Request, res: Response)=> {


    const { id } = req.params;
    const cliente = await Cliente.findByPk(id);
    res.json(
        cliente
    );
}
//post 
export const postCliente = async( req: Request, res: Response)=> {

    const { body } = req;
    
    try{
        const existeSushi = await Cliente.findOne({
            where: { nombre: body.nombre}
        });

        if(existeSushi){
            return res.status(400).json({
                msg:'Ya existe el Cliente ' + body.nombre
            })
        }

        const cliente = new Cliente(body);
        await cliente.save();
        res.json(cliente);
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:'error al crear',
        });
    
   
}
}
//update
export const putCliente = async( req: Request, res: Response)=> {
    const { id } = req.params;
    const { body } = req;
    
    try{
        const cliente = await Cliente.findByPk(id);

        if(!cliente){
            return res.status(404).json({
                msg:'No existe el Cliente ' + id
            })
        }
        await cliente.update(body);
        res.json(Cliente);
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:'error al actualizar',
        });
    
   
}
}
//delete
export const deleteCliente = async( req: Request, res: Response)=> {
    const { id } = req.params;

    try{
        const cliente = await Cliente.findByPk(id);

        if(!cliente){
            return res.status(404).json({
                msg:'No existe el Cliente ' + id
            })
        }
        await cliente.destroy();
        res.json({msg:'El Cliente ha sido eliminado'});
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:'error al actualizar',
        });
    
   
}
}
