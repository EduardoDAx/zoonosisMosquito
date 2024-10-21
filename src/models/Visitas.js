import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { AsignacionSensores } from './AsigSensores.js';
import { SitViviendas } from './SitViviendas.js';
import { Usuarios } from './Usuarios.js';


export const Visitas = sequelize.define('visitas', {
    id_visita: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    colecta_ext: {
        type: DataTypes.BOOLEAN,
    },
    colecta_int: {
        type: DataTypes.BOOLEAN,
    },
    puesta_ext: {
        type: DataTypes.BOOLEAN,
    },
    puesta_int: {
        type: DataTypes.BOOLEAN,
    },
    observacion: {
        type: DataTypes.STRING(100),
    },
    fecha_sistema: {
        type: DataTypes.DATE,
    },
    estado: {
        type: DataTypes.BOOLEAN,
    },
    id_sit_vivienda: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_asignacion_sensor: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'Visitas',
    timestamps: false,
});

// Relaciones
Visitas.belongsTo(AsignacionSensores, { foreignKey: 'id_asignacion_sensor' });
Visitas.belongsTo(SitViviendas, { foreignKey: 'id_sit_vivienda' });

