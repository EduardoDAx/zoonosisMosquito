import { Request,Response } from "express";
import SitVivienda from "../models/sitViviendas.models";

export const createSitVivienda= async (req:Request,res:Response)=>{
    try {
        const sitViviendas = await SitVivienda.create(req.body)
        res.json({data:sitViviendas})
    }catch(error){
        console.log(error)
    }
}
export const getSitVivienda = async (req:Request, res:Response)=>{
    try{
        const sitViviendas = await SitVivienda.findAll({
            attributes:{exclude:['id','createdAt', 'updatedAt']}
        })
        res.json({data:sitViviendas})
    }catch(error){
        console.log(error)
    }
}
export const getSitViviendaById = async (req:Request, res:Response)=>{
    try{
        const {id} = req.params
        const sitViviendas = await SitVivienda.findByPk(id)

        if(!sitViviendas){
            return res.status(404).json('SitVivienda no encontrado')
        }
        res.json({data: sitViviendas})
    }catch(error){
        console.log(error)
    }
}
export const updateSitVivienda = async (req:Request,res:Response)=>{
    try{
        const {id} = req.params
        const sitViviendas = await SitVivienda.findByPk(id)
        if (!sitViviendas){
            return res.status(404).json('SitVivienda no encontrado')
        }
        await sitViviendas.update(req.body)
        await sitViviendas.save()

        res.send({data: sitViviendas})
    } catch(error){
        console.log(error)
    }
}
export const deleteSitVivienda = async (req:Request, res:Response)=>{

    try{
        const {id} = req.params
        const sitViviendas = await SitVivienda.findByPk(id)

        if (!sitViviendas) {
            return res.status(404).json('SitVivienda no encontrado')
        }

        await sitViviendas.destroy(req.body)

        res.send({data: "SitVivienda eliminado"})

    } catch(error){
        console.log(error)
    }
}