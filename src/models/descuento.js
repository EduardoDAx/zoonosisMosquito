import { DataTypes, Sequelize } from 'sequelize'
import {sequelize} from '../database/database.js'
import { Cupon } from './cupon.js';

export const Descuento = sequelize.define('descuento', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, 
  },
  title: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  descuento: {
    type: DataTypes.INTEGER,
  }
});

Descuento.hasMany(Cupon,{
    foreingKey:'descuentoId',
    sourceKey:'id',
    allowNull: false,
})

Cupon.belongsTo(Descuento,{
    foreingKey:'descuentoId',
    targetKey: 'id'
})