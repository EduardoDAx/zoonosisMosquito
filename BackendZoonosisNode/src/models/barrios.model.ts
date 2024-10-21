import { Table, Column, Model, DataType} from "sequelize-typescript";
@Table({
    tableName: 'barrios',
    timestamps: false
})
class Barrio extends Model{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id_barrio: number
    @Column({
        type: DataType.STRING(50)
    })
    nombre: string
    @Column({
        type: DataType.TINYINT
    })
    estado: number
    @Column({
        type: DataType.INTEGER
    })
    id_delegacion: number
}

export default Barrio