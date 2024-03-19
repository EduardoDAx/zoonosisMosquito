import { DataTypes, Sequelize } from 'sequelize'
import {sequelize} from '../database/database.js'

export const Cupon = sequelize.define('cupon', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, 
  },
  usuarioId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  usado: {
    type: DataTypes.BOOLEAN,
    defaultValue : false,
  } 
});