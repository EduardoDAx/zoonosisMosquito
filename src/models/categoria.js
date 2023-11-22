import { DataTypes, Sequelize } from 'sequelize'
import { sequelize } from '../database/database.js';
import { Cupon } from './cupon.js'

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

Categoria.hasMany(Cupon,{
    foreingKey:'catId',
    sourceKey:'id'

})

Cupon.belongsTo(Categoria,{
    foreingKey:'catId',
    targetKey: 'id'
})