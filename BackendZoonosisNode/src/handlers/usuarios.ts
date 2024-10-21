import { Request,Response } from "express";
import Usuario from "../models/usuarios.model";

export const createUsuario= async (req:Request,res:Response)=>{
    try {
        const usuario = await Usuario.create(req.body)
        res.json({data:usuario})
    }catch(error){
        console.log(error)
    }
}
export const getUsuario = async (req:Request, res:Response)=>{
    try{
        const usuario = await Usuario.findAll({
            attributes:{exclude:['id','createdAt', 'updatedAt']}
        })
        res.json({data:usuario})
    }catch(error){
        console.log(error)
    }
}
export const getUsuarioById = async (req:Request, res:Response)=>{
    try{
        const {id} = req.params
        const usuario = await Usuario.findByPk(id)

        if(!usuario){
            return res.status(404).json('Usuario no encontrado')
        }
        res.json({data: usuario})
    }catch(error){
        console.log(error)
    }
}
export const updateUsuario = async (req:Request,res:Response)=>{
    try{
        const {id} = req.params
        const usuario = await Usuario.findByPk(id)
        if (!usuario){
            return res.status(404).json('Usuario no encontrado')
        }
        await usuario.update(req.body)
        await usuario.save()

        res.send({data: usuario})
    } catch(error){
        console.log(error)
    }
}
export const deleteUsuario = async (req:Request, res:Response)=>{

    try{
        const {id} = req.params
        const usuario = await Usuario.findByPk(id)

        if (!usuario) {
            return res.status(404).json('Usuario no encontrado')
        }

        await usuario.destroy(req.body)

        res.send({data: "Usuario eliminado"})

    } catch(error){
        console.log(error)
    }
}