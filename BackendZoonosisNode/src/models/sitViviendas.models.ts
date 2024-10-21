import { Table, Column, Model, DataType, Default, PrimaryKey } from "sequelize-typescript";
@Table({
    tableName: 'sitviviendas'
})
class SitVivienda extends Model{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id_sit_vivienda: number
    @Column({
        type: DataType.STRING(50)
    })
    nombre: string
    
}

export default SitVivienda