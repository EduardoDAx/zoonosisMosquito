import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Localidades } from './Localidades.js';

export const Delegaciones = sequelize.define('delegaciones', {
    id_delegacion: {
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
    id_localidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'Delegaciones',
    timestamps: false,
});

// Relaciones
Delegaciones.belongsTo(Localidades, { foreignKey: 'id_localidad' });
