import { Table, Column, Model, DataType} from "sequelize-typescript";
@Table({
    tableName: 'delegaciones',
    timestamps: false
})
class Delegacion extends Model{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id_delegacion: number
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
    id_localidad: number
}

export default Delegacion