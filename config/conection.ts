
// conection.js
import { Sequelize } from 'sequelize';

const dbHost = "bexmxb8rvdjvmvcw1gk1-mysql.services.clever-cloud.com";
const dbName = "bexmxb8rvdjvmvcw1gk1";
const username = "uyly5lcjcyerfmnq";
const password = "eEm0iureFKRFZ574xOUG";
const dbPort = "3306";
const dbPortNumber: number = parseInt(dbPort, 10);



const db = new Sequelize(dbName, username, password, {
  host: dbHost,
  dialect: 'mysql',
  port: dbPortNumber,
  //logging: false,
});

export default db;




