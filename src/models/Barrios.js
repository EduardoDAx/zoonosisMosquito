import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Delegaciones } from './Delegaciones.js';

export const Barrios = sequelize.define('barrios', {
    id_barrio: {
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
    id_delegacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'Barrios',
    timestamps: false,
});

// Relaciones
Barrios.belongsTo(Delegaciones, { foreignKey: 'id_delegacion' });
