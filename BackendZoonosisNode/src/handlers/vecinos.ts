import { Request,Response } from "express";
import Vecino from "../models/vecinos.model";

export const createVecino= async (req:Request,res:Response)=>{
    try {
        const vecino = await Vecino.create(req.body)
        res.json({data:vecino})
    }catch(error){
        console.log(error)
    }
}
export const getVecino = async (req:Request, res:Response)=>{
    try{
        const vecino = await Vecino.findAll({
            attributes:{exclude:['id','createdAt', 'updatedAt']}
        })
        res.json({data:vecino})
    }catch(error){
        console.log(error)
    }
}
export const getVecinoById = async (req:Request, res:Response)=>{
    try{
        const {id} = req.params
        const vecino = await Vecino.findByPk(id)

        if(!vecino){
            return res.status(404).json('Vecino no encontrado')
        }
        res.json({data: vecino})
    }catch(error){
        console.log(error)
    }
}
export const updateVecino = async (req:Request,res:Response)=>{
    try{
        const {id} = req.params
        const vecino = await Vecino.findByPk(id)
        if (!vecino){
            return res.status(404).json('Vecino no encontrado')
        }
        await vecino.update(req.body)
        await vecino.save()

        res.send({data: vecino})
    } catch(error){
        console.log(error)
    }
}
export const deleteVecino = async (req:Request, res:Response)=>{

    try{
        const {id} = req.params
        const vecino = await Vecino.findByPk(id)

        if (!vecino) {
            return res.status(404).json('Vecino no encontrado')
        }

        await vecino.destroy(req.body)

        res.send({data: "Vecino eliminado"})

    } catch(error){
        console.log(error)
    }
}