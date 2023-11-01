import { DataTypes, Sequelize } from 'sequelize'
import {sequelize} from '../database/database.js'
import { Comercio } from './comercio.js'

export const Usuarios =sequelize.define('usuarios',{
id: {
    type: DataTypes.INTEGER,
  primaryKey: true,
  autoIncrement: true, 
},
name:{
    type:DataTypes.STRING,
},
surename:{
    type:DataTypes.STRING,
},
email:{
    type : DataTypes.STRING,
    unique   : true,// es unico
},
password:{
    type :DataTypes.STRING
},

isAdmin:{
    type : DataTypes.BOOLEAN,
    defaultValue : false,
    //administrador o no administrador
}   

//relación de tablas 
})

Usuarios.hasMany(Comercio,{
    foreingKey:'userId',
    sourceKey:'id'

})

Comercio.belongsTo(Usuarios,{
    foreingKey:'userId',
    targetKey: 'id'
})