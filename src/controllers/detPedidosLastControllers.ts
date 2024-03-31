import { Request, Response } from "express";
import detPedido from "../models/detPedidoModels";


// get the last pedido
export const getTheLastDetPedido = async (req: Request, res: Response) => {
    try {
        const ultimoDetPedido = await detPedido.findOne({
            order: [['createdAt', 'DESC']], // Ordena los pedidos por fecha de creación de forma descendente
        });

        if (ultimoDetPedido) {
            res.json(ultimoDetPedido);
        } else {
            res.status(404).send('No se encontró ningúno');
        }
    } catch (error) {
        console.error('Error al obtener:', error);
        res.status(500).send('Error interno del servidor');
    }
};



