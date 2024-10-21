import { Table, Column, Model, DataType} from "sequelize-typescript";
@Table({
    tableName: 'tipos'
})
class Tipo extends Model{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id_tipo: number
    @Column({
        type: DataType.STRING(50)
    })
    nombre: string
}

export default Tipo