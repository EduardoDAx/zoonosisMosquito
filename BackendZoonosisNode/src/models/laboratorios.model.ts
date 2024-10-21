import { Table, Column, Model, DataType} from "sequelize-typescript";
@Table({
    tableName: 'laboratorios',
    timestamps: false
})
class Laboratorio extends Model{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id_laboratorio: number
    @Column({
        type: DataType.INTEGER
    })
    colecta_ext_via: number
    @Column({
        type: DataType.INTEGER
    })
    colecta_ext_inv: number
    @Column({
        type: DataType.INTEGER
    })
    colecta_ext_eclos: number
    @Column({
        type: DataType.INTEGER
    })
    ext_lineas: number
    @Column({
        type: DataType.INTEGER
    })
    colecta_int_via: number
    @Column({
        type: DataType.INTEGER
    })
    colecta_int_inv: number
    @Column({
        type: DataType.INTEGER
    })
    colecta_int_eclos: number
    @Column({
        type: DataType.INTEGER
    })
    int_lineas: number
    @Column({
        type: DataType.DATE
    })
    fecha: Date
    @Column({
        type: DataType.DATE
    })
    fecha_sistema: Date
    @Column({
        type: DataType.STRING(100)
    })
    observaciones: string
    @Column({
        type: DataType.TINYINT
    })
    estado: number
    @Column({
        type: DataType.INTEGER
    })
    id_visita: number
}

export default Laboratorio