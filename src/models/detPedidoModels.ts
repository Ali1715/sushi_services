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
// Sincronizar el modelo con la base de datos
db.sync()
  .then(() => {
    console.log('Modelo sincronizado correctamente con la base de datos.');
  })
  .catch(error => {
    console.error('Error al sincronizar el modelo con la base de datos:', error);
  });
export default detPedido;