import { NombreSensores } from "../models/NombreSensores.js"

export const createNombreSensores= async (req,res)=>{
    try {
        const nombreSensores = await NombreSensores.create(req.body)
        res.json({data:nombreSensores})
    }catch(error){
        console.log(error)
    }
}
export const getNombreSensores = async (req, res)=>{
    try{
        const nombreSensores = await NombreSensores.findAll({
            attributes:{exclude:['id','createdAt', 'updatedAt']}
        })
        res.json({data:nombreSensores})
    }catch(error){
        console.log(error)
    }
}
export const getNombreSensoresById = async (req, res)=>{
    try{
        const {id} = req.params
        const nombreSensores = await NombreSensores.findByPk(id)

        if(!nombreSensores){
            return res.status(404).json('Nombre Sensor no encontrado')
        }
        res.json({data: nombreSensores})
    }catch(error){
        console.log(error)
    }
}
export const updateNombreSensores = async (req,res)=>{
    try{
        const {id} = req.params
        const nombreSensores = await NombreSensores.findByPk(id)
        if (!nombreSensores){
            return res.status(404).json('Nombre Sensor no encontrado')
        }
        await nombreSensores.update(req.body)
        await nombreSensores.save()

        res.send({data: nombreSensores})
    } catch(error){
        console.log(error)
    }
}
export const deleteNombreSensores = async (req, res)=>{

    try{
        const {id} = req.params
        const nombreSensores = await NombreSensores.findByPk(id)

        if (!nombreSensores) {
            return res.status(404).json('Nombre Sensor no encontrado')
        }

        await nombreSensores.destroy(req.body)

        res.send({data: "Nombre Sensor eliminado"})

    } catch(error){
        console.log(error)
    }
}