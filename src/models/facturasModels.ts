import { DataTypes } from "sequelize";
import db from "../../config/conection";

db

const Factura =db.define('factura', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true // Assuming you want an auto-incrementing primary key
    },
    nombre: {
        type: DataTypes.STRING
    },
    nit:{
        type: DataTypes.INTEGER
    },
    pago_id:{
        type: DataTypes.INTEGER
    },
    subtotal:{
        type: DataTypes.DOUBLE
    },
    total:{
        type: DataTypes.DOUBLE
    }


})

export default Factura;