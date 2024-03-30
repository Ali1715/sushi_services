import { DataTypes } from "sequelize";
import db from "../../config/conection";

db

const Pedido =db.define('pedido', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true // Assuming you want an auto-incrementing primary key
    },
    estado_id: {
        type: DataTypes.INTEGER
    },
    nombre:{
        type: DataTypes.STRING
    },
    total:{
        type: DataTypes.DOUBLE
    }



})

export default Pedido;