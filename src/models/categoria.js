import { DataTypes, Sequelize } from 'sequelize'
import { sequelize } from '../database/database.js';
import { Cupon } from './cupon.js'
import { Descuento } from './descuento.js';

export const Categoria = sequelize.define('categoria',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey : true , //llave primaria
        autoIncrement:true  //incremento automatico
    },
    tipo:{
        type :DataTypes.STRING,
    },
    Descripción:{
        type :DataTypes.STRING,
    }
    
})

Categoria.hasMany(Descuento,{
    foreingKey:'catId',
    sourceKey:'id'

})

Descuento.belongsTo(Categoria,{
    foreingKey:'catId',
    targetKey: 'id'
})