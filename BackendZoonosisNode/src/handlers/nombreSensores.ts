import { Request,Response } from "express";
import NombreSensores from "../models/nombreSensores.model";

export const createNombreSensores= async (req:Request,res:Response)=>{
    try {
        const nombreSensores = await NombreSensores.create(req.body)
        res.json({data:nombreSensores})
    }catch(error){
        console.log(error)
    }
}
export const getNombreSensores = async (req:Request, res:Response)=>{
    try{
        const nombreSensores = await NombreSensores.findAll({
            attributes:{exclude:['id','createdAt', 'updatedAt']}
        })
        res.json({data:nombreSensores})
    }catch(error){
        console.log(error)
    }
}
export const getNombreSensoresById = async (req:Request, res:Response)=>{
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
export const updateNombreSensores = async (req:Request,res:Response)=>{
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
export const deleteNombreSensores = async (req:Request, res:Response)=>{

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