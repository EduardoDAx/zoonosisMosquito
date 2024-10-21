import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Tipos = sequelize.define('tipos', {
    id_tipo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
}, {
    tableName: 'Tipos',
    timestamps: false,
});
