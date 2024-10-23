import app from "./app.js";
import { sequelize } from './database/database.js';
import dotenv from 'dotenv';

dotenv.config();

const port =  3000; // Valor por defecto si no se define PORT
const host = process.env.HOST || 'localhost'; // Valor por defecto para el host

console.log(`El puerto esta corriendo en el puerto 3000: ${port} ...`);

import './models/Usuarios.js';
import './models/Laboratorios.js';
import './models/Localidades.js';
import './models/AsigSensores.js';
import './models/Barrios.js';
import './models/Delegaciones.js';
import './models/NombreSensores.js';
import './models/SitViviendas.js';
import './models/Vecinos.js';
import './models/Visitas.js';
import './models/Tipos.js';

async function main() {
  try {
    await sequelize.sync({ alter: true }); 
    console.log("Connection has been established successfully.");
    
    app.listen(port, host, () => {
      console.log(`Server listening on http://${host}:${port}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
