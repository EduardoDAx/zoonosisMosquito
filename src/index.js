import app from "./app.js";
import { sequelize } from './database/database.js';
// import './models/usuario.js'
// import './models/comercio.js'

async function main(){
   try {
    await sequelize.sync({force : false} );
    console.log("connection has been established succesfully. ")
    app.listen(5000)
    console.log('Server listening on port ',5000)
   } catch (error) {
    console.log("unable to connect to the database:", error)
   }
}

main()