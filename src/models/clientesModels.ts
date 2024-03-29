import { DataTypes } from "sequelize";
import db from "../../config/conection";

db

const Cliente =db.define('cliente', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true // Assuming you want an auto-incrementing primary key
    },
    nombre: {
        type: DataTypes.STRING
    },
    contacto:{
        type: DataTypes.INTEGER
    },
    correo:{
        type: DataTypes.STRING
    }



})

export default Cliente;