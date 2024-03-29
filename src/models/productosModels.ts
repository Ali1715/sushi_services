import { DataTypes } from "sequelize";
import db from "../../config/conection";

db

const Producto =db.define('producto', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true // Assuming you want an auto-incrementing primary key
    },
    nombre: {
        type: DataTypes.STRING
    },
    descripcion:{
        type: DataTypes.STRING
    },
    precio:{
        type: DataTypes.DOUBLE
    },
    imagen:{
        type: DataTypes.STRING
    },
    stock:{
        type: DataTypes.INTEGER
    },
    categoria_id:{
        type: DataTypes.INTEGER
    },
    descuento_id:{
        type: DataTypes.INTEGER
    },
   



})

export default Producto;