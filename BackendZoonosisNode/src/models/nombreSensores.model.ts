import { Table, Column, Model, DataType, Default, PrimaryKey } from "sequelize-typescript";
@Table({
    tableName: 'nombresensores'
})
class NombreSensores extends Model{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id_nombre_sensor: number
    @Column({
        type: DataType.STRING(50)
    })
    nombre: string
    
}

export default NombreSensores