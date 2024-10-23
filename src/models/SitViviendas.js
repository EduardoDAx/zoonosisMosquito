import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const SitViviendas = sequelize.define('sit_viviendas', {
    id_sit_vivienda: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
}, {
    tableName: 'SitViviendas',
    timestamps: false,
});
