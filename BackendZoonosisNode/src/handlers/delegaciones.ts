import { Request,Response } from "express";
import Delegacion from "../models/delegaciones.model";

export const createDelegacion= async (req:Request,res:Response)=>{
    try {
        const delegacion = await Delegacion.create(req.body)
        res.json({data:delegacion})
    }catch(error){
        console.log(error)
    }
}
export const getDelegacion = async (req:Request, res:Response)=>{
    try{
        const delegacion = await Delegacion.findAll({
            attributes:{exclude:['id','createdAt', 'updatedAt']}
        })
        res.json({data:delegacion})
    }catch(error){
        console.log(error)
    }
}
export const getDelegacionById = async (req:Request, res:Response)=>{
    try{
        const {id} = req.params
        const delegacion = await Delegacion.findByPk(id)

        if(!delegacion){
            return res.status(404).json('Delegación no encontrada')
        }
        res.json({data: delegacion})
    }catch(error){
        console.log(error)
    }
}
export const updateDelegacion = async (req:Request,res:Response)=>{
    try{
        const {id} = req.params
        const delegacion = await Delegacion.findByPk(id)
        if (!delegacion){
            return res.status(404).json('Delegación no encontrada')
        }
        await delegacion.update(req.body)
        await delegacion.save()

        res.send({data: delegacion})
    } catch(error){
        console.log(error)
    }
}
export const deleteDelegacion = async (req:Request, res:Response)=>{

    try{
        const {id} = req.params
        const delegacion = await Delegacion.findByPk(id)

        if (!delegacion) {
            return res.status(404).json('Delegación no encontrada')
        }

        await delegacion.destroy(req.body)

        res.send({data: "Delegación eliminada"})

    } catch(error){
        console.log(error)
    }
}