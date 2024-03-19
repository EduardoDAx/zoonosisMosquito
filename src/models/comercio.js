import { DataTypes, Sequelize } from 'sequelize'
import { sequelize } from '../database/database.js';
import { Descuento } from './descuento.js';

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
        type  :DataTypes.BIGINT,
    },
    direccion:{
        type  :DataTypes.STRING,
    },
    cod_Com:{
        type  :DataTypes.STRING,
    },
    
})

Comercio.hasMany(Descuento,{
    foreingKey:'comId',
    sourceKey:'id',
    allowNull: false,
})

Descuento.belongsTo(Comercio,{
    foreingKey:'comId',
    targetKey: 'id'
})