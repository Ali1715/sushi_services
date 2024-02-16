// conection.js
import { Sequelize } from 'sequelize';

const dbHost = process.env.DB_HOST || 'localhost';
const dbName = process.env.DB_NAME || 'sushi_db';
const username = process.env.DB_USER || 'root';
const password = process.env.DB_PASSWORD || '';



const db = new Sequelize(dbName, username, password, {
  host: dbHost,
  dialect: 'mysql',
  //logging: false,
});

export default db;




