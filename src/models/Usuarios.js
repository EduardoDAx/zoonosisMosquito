import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Tipos } from './Tipos.js';
import { Visitas } from './Visitas.js';

export const Usuarios = sequelize.define('usuarios', {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dni: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fecha_nacimiento: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    celular: {
        type: DataTypes.STRING(15),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true, // es único
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true, // es único
    },
    password_hash: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    estado:{
        type: DataTypes.INTEGER,
        allowNull:false,// TODO LO QUE ESTA FALSE SE DEBE PASAR SI EL DATO
    },
    
    id_tipo: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'Usuarios',
    timestamps: false, // No se utilizarán los timestamps automáticos de Sequelize
});

// Relaciones de tablas
Usuarios.belongsTo(Tipos, {
    foreignKey: 'id_tipo',
    targetKey: 'id_tipo',
});

Usuarios.hasMany(Visitas, {
    foreignKey: 'id_usuario',
    sourceKey: 'id_usuario',
});

Visitas.belongsTo(Usuarios, {
    foreignKey: 'id_usuario',
    targetKey: 'id_usuario',
});
