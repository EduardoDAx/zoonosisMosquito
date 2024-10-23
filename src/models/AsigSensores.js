import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { NombreSensores } from './NombreSensores.js';
import { Vecinos } from './Vecinos.js';
import { Barrios } from './Barrios.js';

export const AsignacionSensores = sequelize.define('asignacion_sensores', {
    id_asignacion_sensor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    coordenadas_x: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    coordenadas_y: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fecha_carga: {
        type: DataTypes.DATE,
    },
    fecha_sistema: {
        type: DataTypes.DATE,
    },
    id_nombre_sensor: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_vecino: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_barrio: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'AsignacionSensores',
    timestamps: false,
});

// Relaciones
AsignacionSensores.belongsTo(NombreSensores, { foreignKey: 'id_nombre_sensor' });
AsignacionSensores.belongsTo(Vecinos, { foreignKey: 'id_vecino' });
AsignacionSensores.belongsTo(Barrios, { foreignKey: 'id_barrio' });
