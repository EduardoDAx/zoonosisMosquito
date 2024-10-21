import { Table, Column, Model, DataType} from "sequelize-typescript";
@Table({
    tableName: 'usuarios',
    timestamps: false
})
class Usuario extends Model{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id_usuario: number
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
        type: DataType.STRING(15)
    })
    celular: string
    @Column({
        type: DataType.STRING(100)
    })
    email: string
    @Column({
        type: DataType.STRING(50)
    })
    username: string
    @Column({
        type: DataType.STRING(255)
    })
    password_hash: string
    @Column({
        type: DataType.INTEGER
    })
    estado: number
    @Column({
        type: DataType.INTEGER
    })
    id_tipo: number
}

export default Usuario