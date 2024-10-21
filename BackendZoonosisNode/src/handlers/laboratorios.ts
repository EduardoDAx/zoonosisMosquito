import { Request,Response } from "express";
import Laboratorio from "../models/laboratorios.model";

export const createLaboratorio= async (req:Request,res:Response)=>{
    try {
        const laboratorio = await Laboratorio.create(req.body)
        res.json({data:laboratorio})
    }catch(error){
        console.log(error)
    }
}
export const getLaboratorio = async (req:Request, res:Response)=>{
    try{
        const laboratorio = await Laboratorio.findAll({
            attributes:{exclude:['id','createdAt', 'updatedAt']}
        })
        res.json({data:laboratorio})
    }catch(error){
        console.log(error)
    }
}
export const getLaboratorioById = async (req:Request, res:Response)=>{
    try{
        const {id} = req.params
        const laboratorio = await Laboratorio.findByPk(id)

        if(!laboratorio){
            return res.status(404).json('Laboratorio no encontrado')
        }
        res.json({data: laboratorio})
    }catch(error){
        console.log(error)
    }
}
export const updateLaboratorio = async (req:Request,res:Response)=>{
    try{
        const {id} = req.params
        const laboratorio = await Laboratorio.findByPk(id)
        if (!laboratorio){
            return res.status(404).json('Laboratorio no encontrado')
        }
        await laboratorio.update(req.body)
        await laboratorio.save()

        res.send({data: laboratorio})
    } catch(error){
        console.log(error)
    }
}
export const deleteLaboratorio = async (req:Request, res:Response)=>{

    try{
        const {id} = req.params
        const laboratorio = await Laboratorio.findByPk(id)

        if (!laboratorio) {
            return res.status(404).json('Laboratorio no encontrado')
        }

        await laboratorio.destroy(req.body)

        res.send({data: "Laboratorio eliminado"})

    } catch(error){
        console.log(error)
    }
}