import { Request,Response } from "express";
import Visitas from "../models/visitas.model";

export const createVisitas= async (req:Request,res:Response)=>{
    try {
        const visita = await Visitas.create(req.body)
        res.json({data:visita})
    }catch(error){
        console.log(error)
    }
}
export const getVisitas = async (req:Request, res:Response)=>{
    try{
        const visita = await Visitas.findAll({
            attributes:{exclude:['id','createdAt', 'updatedAt']}
        })
        res.json({data:visita})
    }catch(error){
        console.log(error)
    }
}
export const getVisitasById = async (req:Request, res:Response)=>{
    try{
        const {id} = req.params
        const visita = await Visitas.findByPk(id)

        if(!visita){
            return res.status(404).json('Visita no encontrada')
        }
        res.json({data: visita})
    }catch(error){
        console.log(error)
    }
}
export const updateVisitas = async (req:Request,res:Response)=>{
    try{
        const {id} = req.params
        const visita = await Visitas.findByPk(id)
        if (!visita){
            return res.status(404).json('Visita no encontrada')
        }
        await visita.update(req.body)
        await visita.save()

        res.send({data: visita})
    } catch(error){
        console.log(error)
    }
}
export const deleteVisitas = async (req:Request, res:Response)=>{

    try{
        const {id} = req.params
        const visita = await Visitas.findByPk(id)

        if (!visita) {
            return res.status(404).json('Visita no encontrada')
        }

        await visita.destroy(req.body)

        res.send({data: "Visita eliminada"})

    } catch(error){
        console.log(error)
    }
}