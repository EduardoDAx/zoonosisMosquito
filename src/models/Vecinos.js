import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Vecinos = sequelize.define('vecinos', {
    id_vecino: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING(50),
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
    calle: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    altura: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    observacion: {
        type: DataTypes.STRING(100),
    },
    fecha_carga: {
        type: DataTypes.DATE,
    },
    fecha_sistema: {
        type: DataTypes.DATE,
    },
    estado: {
        type: DataTypes.BOOLEAN,
    },
}, {
    tableName: 'Vecinos',
    timestamps: false,
});
