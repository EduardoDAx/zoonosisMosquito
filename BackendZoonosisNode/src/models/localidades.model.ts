import { Table, Column, Model, DataType} from "sequelize-typescript";
@Table({
    tableName: 'localidades',
    timestamps:false
})
class Localidad extends Model{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,        
        primaryKey: true
    })
    id_localidad: number
    @Column({
        type: DataType.STRING(50)
    })
    nombre: string
    @Column({
        type: DataType.TINYINT
    })
    estado: number
   
}

export default Localidad