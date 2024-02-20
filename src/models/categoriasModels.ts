import { DataTypes } from "sequelize";
import db from "../../config/conection";

db

const Categoria =db.define('categorias', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true // Assuming you want an auto-incrementing primary key
    },
    nombre: {
        type: DataTypes.STRING
    }



})

export default Categoria;