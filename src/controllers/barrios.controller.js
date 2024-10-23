import { Barrios } from "../models/Barrios"

export const createBarrio= async (req,res)=>{
    try {
        const barrio = await Barrios.create(req.body)
        res.json({data:barrio})
    }catch(error){
        console.log(error)
    }
}
export const getBarrio = async (req, res)=>{
    try{
        const barrio = await Barrios.findAll({
            attributes:{exclude:['id','createdAt', 'updatedAt']}
        })
        res.json({data:barrio})
    }catch(error){
        console.log(error)
    }
}
export const getBarrioById = async (req, res)=>{
    try{
        const {id} = req.params
        const barrio = await Barrios.findByPk(id)

        if(!barrio){
            return res.status(404).json('Barrio no encontrado')
        }
        res.json({data: barrio})
    }catch(error){
        console.log(error)
    }
}
export const updateBarrio = async (req,res)=>{
    try{
        const {id} = req.params
        const barrio = await Barrios.findByPk(id)
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
export const deleteBarrio = async (req, res)=>{

    try{
        const {id} = req.params
        const barrio = await Barrios.findByPk(id)

        if (!barrio) {
            return res.status(404).json('Barrio no encontrado')
        }

        await barrio.destroy(req.body)

        res.send({data: "Barrio eliminado"})

    } catch(error){
        console.log(error)
    }
}