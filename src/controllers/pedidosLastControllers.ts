import { Request, Response } from "express";
import Pedido from "../models/pedidosModels";


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



