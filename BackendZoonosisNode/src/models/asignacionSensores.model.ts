import { Table, Column, Model, DataType} from "sequelize-typescript";
@Table({
    tableName: 'asignacionsensores',
    timestamps:false
})
class AsignacionSensores extends Model{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,        
        primaryKey: true
    })
    id_asignacion_sensor: number
    @Column({
        type: DataType.INTEGER
    })
    coordenadas_x: number
    @Column({
        type: DataType.INTEGER
    })
    coordenadas_y: number
    @Column({
        type: DataType.DATE
    })
    fecha_carga: Date
    @Column({
        type: DataType.DATE
    })
    fecha_sistema: Date
    @Column({
        type: DataType.INTEGER
    })
    id_nombre_sensor: number
    @Column({
        type: DataType.INTEGER
    })
    id_vecino: number
    @Column({
        type: DataType.INTEGER
    })
    id_barrio: number
   
}

export default AsignacionSensores