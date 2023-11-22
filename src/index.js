import app from "./app.js";
import { sequelize } from './database/database.js';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT;
// import './models/usuario.js'
// import './models/comercio.js'
// import './models/wallet.js'
// import './models/cupon.js'
// import './models/categoria.js'

async function main(){
   try {
    await sequelize.sync({force : false} );
    console.log("connection has been established succesfully. ")
    app.listen(port)
    console.log('Server listening on port ',port)
   } catch (error) {
    console.log("unable to connect to the database:", error)
   }
}

main()