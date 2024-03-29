// conection.js
import { Sequelize } from 'sequelize';

const dbHost = process.env.DB_HOST || 'bexmxb8rvdjvmvcw1gk1-mysql.services.clever-cloud.com';
const dbName = process.env.DB_NAME || 'bexmxb8rvdjvmvcw1gk1';
const username = process.env.DB_USER || 'uyly5lcjcyerfmnq';
const password = process.env.DB_PASSWORD || 'eEm0iureFKRFZ574xOUG';
const dbPort = process.env.DB_PORT || '3306' ;
const dbPortNumber: number = parseInt(dbPort, 10);



const db = new Sequelize(dbName, username, password, {
  host: dbHost,
  dialect: 'mysql',
  port: dbPortNumber,
  //logging: false,
});

export default db;




