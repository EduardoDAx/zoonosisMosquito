import { Request,Response } from "express";
import Localidad from "../models/localidades.model"

export const createLocalidad= async (req:Request,res:Response)=>{
    try {
        const localidad = await Localidad.create(req.body)
        res.json({data:localidad})
    }catch(error){
        console.log(error)
    }
}
export const getLocalidad = async (req:Request, res:Response)=>{
    try{
        const localidad = await Localidad.findAll({
            attributes:{exclude:['id','createdAt', 'updatedAt']}
        })
        res.json({data:localidad})
    }catch(error){
        console.log(error)
    }
}
export const getLocalidadById = async (req:Request, res:Response)=>{
    try{
        const {id} = req.params
        const localidad = await Localidad.findByPk(id)

        if(!localidad){
            return res.status(404).json('Localidad no encontrada')
        }
        res.json({data: localidad})
    }catch(error){
        console.log(error)
    }
}
export const updateLocalidad = async (req:Request,res:Response)=>{
    try{
        const {id} = req.params
        const localidad = await Localidad.findByPk(id)
        if (!localidad){
            return res.status(404).json('Localidad no encontrada')
        }
        await localidad.update(req.body)
        await localidad.save()

        res.send({data: localidad})
    } catch(error){
        console.log(error)
    }
}
export const deleteLocalidad = async (req:Request, res:Response)=>{

    try{
        const {id} = req.params
        const localidad = await Localidad.findByPk(id)

        if (!localidad) {
            return res.status(404).json('Localidad no encontrada')
        }

        await localidad.destroy(req.body)

        res.send({data: "Localidad eliminada"})

    } catch(error){
        console.log(error)
    }
}