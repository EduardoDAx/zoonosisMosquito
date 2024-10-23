import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const NombreSensores = sequelize.define('nombre_sensores', {
    id_nombre_sensor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
}, {
    tableName: 'NombreSensores',
    timestamps: false,
});
