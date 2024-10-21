import express from 'express'
import routerLocalidad from './routers/routerLocalidades'
import routerBarrio from './routers/routerBarrios'
import routerDelegacion from './routers/routerDelegaciones'
import routerLaboratiorios from './routers/routerLaboratorios'
import routerUsuario from './routers/routerUsuarios'
import routerAsignacionSensores from './routers/routerAsignacionSensores'
import routerNombreSensores from './routers/routerNombreSensor'
import routerSitViviendas from './routers/routerSitViviendas'
import routerTipos from './routers/routerTipos'
import routerVecino from './routers/routerVecinos'
import routerVisitas from './routers/routerVisistas'
import db from "./config/db"
import colors from 'colors'

async function connectDB(){
    try{
        await db.authenticate()
        db.sync()
        console.log(colors.bgCyan.white("conexion exitosa"))
    }catch(error){
        console.log(error)
        console.log("hubo un error al conectar con la base de datos")
    }
}
connectDB()
const server = express()
server.use(express.json())
server.use('/api/asignacionSensores',routerAsignacionSensores)
server.use('/api/barrio',routerBarrio)
server.use('/api/delegacion',routerDelegacion)
server.use('/api/laboratorio',routerLaboratiorios)
server.use('/api/localidad',routerLocalidad)
server.use('/api/nombreSensores',routerNombreSensores)
server.use('/api/sitViviendas',routerSitViviendas)
server.use('/api/tipos',routerTipos)
server.use('/api/usuarios',routerUsuario)
server.use('/api/vecino',routerVecino)
server.use('/api/visita',routerVisitas)

export default server