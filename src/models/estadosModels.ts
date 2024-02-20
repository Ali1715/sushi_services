import { DataTypes } from "sequelize";
import db from "../../config/conection";

db

const Estado =db.define('estado', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true // Assuming you want an auto-incrementing primary key
    },
    estado: {
        type: DataTypes.STRING
    }



})

export default Estado;