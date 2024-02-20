import { DataTypes } from "sequelize";
import db from "../../config/conection";

db

const detPedido =db.define('detalle_pedido', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true // Assuming you want an auto-incrementing primary key
    },
    pedido_id: {
        type: DataTypes.INTEGER
    },
    producto_id:{
        type: DataTypes.INTEGER
    },
    cantidad:{
        type: DataTypes.INTEGER
    },
    subtotal:{
        type: DataTypes.DOUBLE
    }



})

export default detPedido;