import { Sequelize } from 'sequelize';
import { setupModels } from './../models/index.js';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

// Conexion with database
// Pool and sequelize (ORM)
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
  logging: true,
});
setupModels(sequelize);
sequelize.sync(
  // {force: true}
  );


// module.exports = sequelize;
export default sequelize;
