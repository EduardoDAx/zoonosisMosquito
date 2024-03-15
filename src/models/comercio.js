import { DataTypes, Sequelize } from 'sequelize'
import { sequelize } from '../database/database.js';
import { Cupon } from './cupon.js'

export const Comercio = sequelize.define('comercio',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey : true , //llave primaria
        autoIncrement:true  //incremento automatico
    },
    image:{
        type :DataTypes.STRING,
    },
    name:{
        type :DataTypes.STRING,
    },
    rubro:{
        type  :DataTypes.STRING,
    },
    numerocontacto:{
        type  :DataTypes.INTEGER,
    },
    direccion:{
        type  :DataTypes.STRING,
    },
    cod_Com:{
        type  :DataTypes.STRING,
    },
    
})

Comercio.hasMany(Cupon,{
    foreingKey:'comId',
    sourceKey:'id'

})

Cupon.belongsTo(Comercio,{
    foreingKey:'comId',
    targetKey: 'id'
})