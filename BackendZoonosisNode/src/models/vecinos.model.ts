import { Table, Column, Model, DataType} from "sequelize-typescript";
@Table({
    tableName: 'vecinos',
    timestamps:false
})
class Vecino extends Model{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,        
        primaryKey: true
    })
    id_vecino: number
    @Column({
        type: DataType.STRING(50)
    })
    nombre: string
    @Column({
        type: DataType.STRING(50)
    })
    apellido: string
    @Column({
        type: DataType.INTEGER
    })
    dni: number
    @Column({
        type: DataType.DATE
    })
    fecha_nacimiento: Date
    @Column({
        type: DataType.STRING(50)
    })
    calle: string
    @Column({
        type: DataType.INTEGER
    })
    altura: number
    @Column({
        type: DataType.STRING(100)
    })
    observacion: string
    @Column({
        type: DataType.DATE
    })
    fecha_carga: Date
    @Column({
        type: DataType.DATE
    })
    fecha_sistema: Date
    @Column({
        type: DataType.TINYINT
    })
    estado: number
   
}

export default Vecino