import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Localidades = sequelize.define('localidades', {
    id_localidad: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    estado: {
        type: DataTypes.BOOLEAN,
    },
}, {
    tableName: 'Localidades',
    timestamps: false,
});
