import { Localidades } from "../models/Localidades"

export const createLocalidad= async (req,res)=>{
    try {
        const localidad = await Localidades.create(req.body)
        res.json({data:localidad})
    }catch(error){
        console.log(error)
    }
}
export const getLocalidad = async (req, res)=>{
    try{
        const localidad = await Localidades.findAll({
            attributes:{exclude:['id','createdAt', 'updatedAt']}
        })
        res.json({data:localidad})
    }catch(error){
        console.log(error)
    }
}
export const getLocalidadById = async (req, res)=>{
    try{
        const {id} = req.params
        const localidad = await Localidades.findByPk(id)

        if(!localidad){
            return res.status(404).json('Localidad no encontrada')
        }
        res.json({data: localidad})
    }catch(error){
        console.log(error)
    }
}
export const updateLocalidad = async (req,res)=>{
    try{
        const {id} = req.params
        const localidad = await Localidades.findByPk(id)
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
export const deleteLocalidad = async (req, res)=>{

    try{
        const {id} = req.params
        const localidad = await Localidades.findByPk(id)

        if (!localidad) {
            return res.status(404).json('Localidad no encontrada')
        }

        await localidad.destroy(req.body)

        res.send({data: "Localidad eliminada"})

    } catch(error){
        console.log(error)
    }
}