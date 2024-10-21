import { Request,Response } from "express";
import AsignacionSensores from "../models/asignacionSensores.model";

export const createAsignacionSensores= async (req:Request,res:Response)=>{
    try {
        const asignacionSensores = await AsignacionSensores.create(req.body)
        res.json({data:asignacionSensores})
    }catch(error){
        console.log(error)
    }
}
export const getAsignacionSensores = async (req:Request, res:Response)=>{
    try{
        const asignacionSensores = await AsignacionSensores.findAll({
            attributes:{exclude:['id','createdAt', 'updatedAt']}
        })
        res.json({data:asignacionSensores})
    }catch(error){
        console.log(error)
    }
}
export const getAsignacionSensoresById = async (req:Request, res:Response)=>{
    try{
        const {id} = req.params
        const asignacionSensores = await AsignacionSensores.findByPk(id)

        if(!asignacionSensores){
            return res.status(404).json('Asignacion Sensor no encontrado')
        }
        res.json({data: asignacionSensores})
    }catch(error){
        console.log(error)
    }
}
export const updateAsignacionSensores = async (req:Request,res:Response)=>{
    try{
        const {id} = req.params
        const asignacionSensores = await AsignacionSensores.findByPk(id)
        if (!asignacionSensores){
            return res.status(404).json('Asignacion Sensor no encontrado')
        }
        await asignacionSensores.update(req.body)
        await asignacionSensores.save()

        res.send({data: asignacionSensores})
    } catch(error){
        console.log(error)
    }
}
export const deleteAsignacionSensores = async (req:Request, res:Response)=>{

    try{
        const {id} = req.params
        const asignacionSensores = await AsignacionSensores.findByPk(id)

        if (!asignacionSensores) {
            return res.status(404).json('Asignacion Sensor no encontrado')
        }

        await asignacionSensores.destroy(req.body)

        res.send({data: "Asignacion Sensor eliminado"})

    } catch(error){
        console.log(error)
    }
}