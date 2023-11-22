import { DataTypes, Sequelize } from 'sequelize'
import {sequelize} from '../database/database.js'

export const Wallet =sequelize.define('wallet',{
id: {
    type: DataTypes.INTEGER,
primaryKey: true,
autoIncrement: true, 
},
monto:{
    type:DataTypes.INTEGER,
} 

})
