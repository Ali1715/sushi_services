import { DataTypes } from "sequelize";
import db from "../../config/conection";

db

const Descuento =db.define('descuento', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true // Assuming you want an auto-incrementing primary key
    },
    descuento: {
        type: DataTypes.REAL
    }



})

export default Descuento;