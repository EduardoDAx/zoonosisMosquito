import { DataTypes, Sequelize } from 'sequelize'
import { sequelize } from '../database/database.js';

export const Comercio = sequelize.define('comercio',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey : true , //llave primaria
        autoIncremente :true  //incremento automatico
    },
    name:{
        type :DataTypes.STRING,
    },
    rubro:{
        type  :DataTypes.STRING,
    },
    direccion:{
        type  :DataTypes.STRING,
    },
    cod_Com:{
        type  :DataTypes.STRING,
    },
    
})