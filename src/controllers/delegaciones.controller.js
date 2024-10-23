import { Delegaciones } from "../models/Delegaciones"

export const createDelegacion= async (req,res)=>{
    try {
        const delegacion = await Delegaciones.create(req.body)
        res.json({data:delegacion})
    }catch(error){
        console.log(error)
    }
}
export const getDelegacion = async (req, res)=>{
    try{
        const delegacion = await Delegaciones.findAll({
            attributes:{exclude:['id','createdAt', 'updatedAt']}
        })
        res.json({data:delegacion})
    }catch(error){
        console.log(error)
    }
}
export const getDelegacionById = async (req, res)=>{
    try{
        const {id} = req.params
        const delegacion = await Delegaciones.findByPk(id)

        if(!delegacion){
            return res.status(404).json('Delegación no encontrada')
        }
        res.json({data: delegacion})
    }catch(error){
        console.log(error)
    }
}
export const updateDelegacion = async (req,res)=>{
    try{
        const {id} = req.params
        const delegacion = await Delegaciones.findByPk(id)
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
export const deleteDelegacion = async (req, res)=>{

    try{
        const {id} = req.params
        const delegacion = await Delegaciones.findByPk(id)

        if (!delegacion) {
            return res.status(404).json('Delegación no encontrada')
        }

        await delegacion.destroy(req.body)

        res.send({data: "Delegación eliminada"})

    } catch(error){
        console.log(error)
    }
}