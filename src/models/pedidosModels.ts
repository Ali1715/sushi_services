import { DataTypes } from "sequelize";
import db from "../../config/conection";

db

const Pedido =db.define('pedido', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true // Assuming you want an auto-incrementing primary key
    },
    costo_env: {
        type:DataTypes.DECIMAL(10,2)
    },
    estado_id: {
        type: DataTypes.INTEGER
    },
    cliente_id:{
        type: DataTypes.INTEGER
    },
    direccion:{
        type: DataTypes.DOUBLE
    },
    total:{
        type: DataTypes.DOUBLE
    }



})

export default Pedido;