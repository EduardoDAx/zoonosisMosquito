import Sequelize from "sequelize";
import {config} from "dotenv";

config()

export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: process.env.DB_DIALECT,
      dialectOptions: {
        ssl: {
          require: true, // Requiere SSL
          rejectUnauthorized: false // Permite conexiones con certificados auto-firmados
        }
      },
      logging: false, // Desactiva el logging de Sequelize si no lo necesitas
    });