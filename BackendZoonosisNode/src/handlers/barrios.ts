import { Request,Response } from "express";
import Barrio from "../models/barrios.model";

export const createBarrio= async (req:Request,res:Response)=>{
    try {
        const barrio = await Barrio.create(req.body)
        res.json({data:barrio})
    }catch(error){
        console.log(error)
    }
}
export const getBarrio = async (req:Request, res:Response)=>{
    try{
        const barrio = await Barrio.findAll({
            attributes:{exclude:['id','createdAt', 'updatedAt']}
        })
        res.json({data:barrio})
    }catch(error){
        console.log(error)
    }
}
export const getBarrioById = async (req:Request, res:Response)=>{
    try{
        const {id} = req.params
        const barrio = await Barrio.findByPk(id)

        if(!barrio){
            return res.status(404).json('Barrio no encontrado')
        }
        res.json({data: barrio})
    }catch(error){
        console.log(error)
    }
}
export const updateBarrio = async (req:Request,res:Response)=>{
    try{
        const {id} = req.params
        const barrio = await Barrio.findByPk(id)
        if (!barrio){
            return res.status(404).json('Barrio no encontrado')
        }
        await barrio.update(req.body)
        await barrio.save()

        res.send({data: barrio})
    } catch(error){
        console.log(error)
    }
}
export const deleteBarrio = async (req:Request, res:Response)=>{

    try{
        const {id} = req.params
        const barrio = await Barrio.findByPk(id)

        if (!barrio) {
            return res.status(404).json('Barrio no encontrado')
        }

        await barrio.destroy(req.body)

        res.send({data: "Barrio eliminado"})

    } catch(error){
        console.log(error)
    }
}