import { Laboratorios } from "../models/Laboratorios.js"

export const createLaboratorio= async (req,res)=>{
    try {
        const laboratorio = await Laboratorios.create(req.body)
        res.json({data:laboratorio})
    }catch(error){
        console.log(error)
    }
}
export const getLaboratorio = async (req, res)=>{
    try{
        const laboratorio = await Laboratorios.findAll({
            attributes:{exclude:['id','createdAt', 'updatedAt']}
        })
        res.json({data:laboratorio})
    }catch(error){
        console.log(error)
    }
}
export const getLaboratorioById = async (req, res)=>{
    try{
        const {id} = req.params
        const laboratorio = await Laboratorios.findByPk(id)

        if(!laboratorio){
            return res.status(404).json('Laboratorio no encontrado')
        }
        res.json({data: laboratorio})
    }catch(error){
        console.log(error)
    }
}
export const updateLaboratorio = async (req,res)=>{
    try{
        const {id} = req.params
        const laboratorio = await Laboratorios.findByPk(id)
        if (!laboratorio){
            return res.status(404).json('Laboratorio no encontrado')
        }
        await laboratorio.update(req.body)
        await laboratorio.save()

        res.send({data: laboratorio})
    } catch(error){
        console.log(error)
    }
}
export const deleteLaboratorio = async (req, res)=>{

    try{
        const {id} = req.params
        const laboratorio = await Laboratorios.findByPk(id)

        if (!laboratorio) {
            return res.status(404).json('Laboratorio no encontrado')
        }

        await laboratorio.destroy(req.body)

        res.send({data: "Laboratorio eliminado"})

    } catch(error){
        console.log(error)
    }
}