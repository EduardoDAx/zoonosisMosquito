import { DataTypes, Sequelize } from 'sequelize'
import {sequelize} from '../database/database.js'

export const Cupon =sequelize.define('cupon',{
id: {
    type: DataTypes.INTEGER,
primaryKey: true,
autoIncrement: true, 
},
title:{
    type:DataTypes.STRING,
},
description:{
    type:DataTypes.STRING,
},
descuento:{
    type:DataTypes.INTEGER,
},
usado:{
    type:DataTypes.BOOLEAN,
    defaultValue : false,
} 


})