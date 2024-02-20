import { Request, Response } from "express";
import Estado from "../models/estadosModels";

//get all
export const getEstados = async( req: Request, res: Response)=> {
const estados = await Estado.findAll();

    res.json(
      estados
    );
}
//get 
export const getEstado = async( req: Request, res: Response)=> {


    const { id } = req.params;
    const estado = await Estado.findByPk(id);
    res.json(
        estado
    );
}
//post 
export const postEstado = async( req: Request, res: Response)=> {

    const { body } = req;
    
    try{
        const existe = await Estado.findOne({
            where: { nombre: body.nombre}
        });

        if(existe){
            return res.status(400).json({
                msg:'Ya existe el Estado ' + body.nombre
            })
        }

        const estado = new Estado(body);
        await estado.save();
        res.json(estado);
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:'error al crear',
        });
    
   
}
}
//update
export const putEstado = async( req: Request, res: Response)=> {
    const { id } = req.params;
    const { body } = req;
    
    try{
        const estado = await Estado.findByPk(id);

        if(!estado){
            return res.status(404).json({
                msg:'No existe el Estado ' + id
            })
        }
        await estado.update(body);
        res.json(estado);
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:'error al actualizar',
        });
    
   
}
}
//delete
export const deleteEstado = async( req: Request, res: Response)=> {
    const { id } = req.params;

    try{
        const estado = await Estado.findByPk(id);

        if(!estado){
            return res.status(404).json({
                msg:'No existe el Estado ' + id
            })
        }
        await estado.destroy();
        res.json({msg:'El Estado ha sido eliminado'});
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:'error al actualizar',
        });
    
   
}
}
