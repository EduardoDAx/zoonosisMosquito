import { Table, Column, Model, DataType} from "sequelize-typescript";
@Table({
    tableName: 'visitas',
    timestamps:false
})
class Visitas extends Model{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,        
        primaryKey: true
    })
    id_visita: number
    @Column({
        type: DataType.DATE
    })
    fecha: Date
    @Column({
        type: DataType.TINYINT
    })
    colecta_ext: number
    @Column({
        type: DataType.TINYINT
    })
    colecta_int: number
    @Column({
        type: DataType.TINYINT
    })
    puesta_ext: number
    @Column({
        type: DataType.TINYINT
    })
    puesta_int: number
    @Column({
        type: DataType.STRING(100)
    })
    observacion: string
    @Column({
        type: DataType.DATE
    })
    fecha_sistema: Date
    @Column({
        type: DataType.TINYINT
    })
    estado: number
    @Column({
        type: DataType.INTEGER
    })
    id_asignacion_sensor: number
    @Column({
        type: DataType.INTEGER
    })
    id_usuario: number
    @Column({
        type: DataType.INTEGER
    })
    id_sit_vivienda: number
   
}

export default Visitas