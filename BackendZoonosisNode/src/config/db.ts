import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv"
dotenv.config();

const db= new Sequelize(process.env.DATABASE_URL!,{
   models:[__dirname+ '/../models/**/*.ts']
})
/*const db= new Sequelize('appzoonosis','root','',{
   host:'localhost',
   dialect: "mysql",
*///   models:[__dirname+ '/../models/**/*.ts']
//})

export default db