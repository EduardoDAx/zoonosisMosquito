import { Request,Response } from "express";
import Tipo from "../models/tipos.model";

export const createTipo= async (req:Request,res:Response)=>{
    try {
        const tipo = await Tipo.create(req.body)
        res.json({data:tipo})
    }catch(error){
        console.log(error)
    }
}
export const getTipo = async (req:Request, res:Response)=>{
    try{
        const tipo = await Tipo.findAll({
            attributes:{exclude:['id','createdAt', 'updatedAt']}
        })
        res.json({data:tipo})
    }catch(error){
        console.log(error)
    }
}
export const getTipoById = async (req:Request, res:Response)=>{
    try{
        const {id} = req.params
        const tipo = await Tipo.findByPk(id)

        if(!tipo){
            return res.status(404).json('Tipo no encontrado')
        }
        res.json({data: tipo})
    }catch(error){
        console.log(error)
    }
}
export const updateTipo = async (req:Request,res:Response)=>{
    try{
        const {id} = req.params
        const tipo = await Tipo.findByPk(id)
        if (!tipo){
            return res.status(404).json('Tipo no encontrado')
        }
        await tipo.update(req.body)
        await tipo.save()

        res.send({data: tipo})
    } catch(error){
        console.log(error)
    }
}
export const deleteTipo = async (req:Request, res:Response)=>{

    try{
        const {id} = req.params
        const tipo = await Tipo.findByPk(id)

        if (!tipo) {
            return res.status(404).json('Tipo no encontrado')
        }

        await tipo.destroy(req.body)

        res.send({data: "Tipo eliminado"})

    } catch(error){
        console.log(error)
    }
}