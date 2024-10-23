import { Vecinos } from "../models/Vecinos"

export const createVecino= async (req,res)=>{
    try {
        const vecino = await Vecinos.create(req.body)
        res.json({data:vecino})
    }catch(error){
        console.log(error)
    }
}
export const getVecino = async (req, res)=>{
    try{
        const vecino = await Vecinos.findAll({
            attributes:{exclude:['id','createdAt', 'updatedAt']}
        })
        res.json({data:vecino})
    }catch(error){
        console.log(error)
    }
}
export const getVecinoById = async (req, res)=>{
    try{
        const {id} = req.params
        const vecino = await Vecinos.findByPk(id)

        if(!vecino){
            return res.status(404).json('Vecino no encontrado')
        }
        res.json({data: vecino})
    }catch(error){
        console.log(error)
    }
}
export const updateVecino = async (req,res)=>{
    try{
        const {id} = req.params
        const vecino = await Vecinos.findByPk(id)
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
export const deleteVecino = async (req, res)=>{

    try{
        const {id} = req.params
        const vecino = await Vecinos.findByPk(id)

        if (!vecino) {
            return res.status(404).json('Vecino no encontrado')
        }

        await vecino.destroy(req.body)

        res.send({data: "Vecino eliminado"})

    } catch(error){
        console.log(error)
    }
}