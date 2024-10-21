import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Visitas } from './Visitas.js';

export const Laboratorios = sequelize.define('laboratorios', {
    id_laboratorio: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    colecta_ext_via: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    colecta_ext_inv: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    colecta_ext_eclos: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    ext_lineas: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    colecta_int_via: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    colecta_int_inv: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    colecta_int_eclos: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    int_lineas: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    fecha_sistema: {
        type: DataTypes.DATE,
    },
    observaciones: {
        type: DataTypes.STRING(100),
    },
    estado: {
        type: DataTypes.BOOLEAN,
    },
    id_visita: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'Laboratorios',
    timestamps: false,
});

// Relaciones
Laboratorios.belongsTo(Visitas, { foreignKey: 'id_visita' });
