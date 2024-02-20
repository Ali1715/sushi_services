import { DataTypes } from "sequelize";
import db from "../../config/conection";

db

const Pago =db.define('pago', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true // Assuming you want an auto-incrementing primary key
    },
    qr_img: {
        type: DataTypes.STRING
    },
    pedido_id:{
        type: DataTypes.INTEGER
    },
    monto:{
        type: DataTypes.DOUBLE
    }



})

export default Pago;