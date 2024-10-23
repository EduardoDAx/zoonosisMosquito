import { SitViviendas } from "../models/SitViviendas"

export const createSitVivienda= async (req,res)=>{
    try {
        const sitViviendas = await SitViviendas.create(req.body)
        res.json({data:sitViviendas})
    }catch(error){
        console.log(error)
    }
}
export const getSitVivienda = async (req, res)=>{
    try{
        const sitViviendas = await SitViviendas.findAll({
            attributes:{exclude:['id','createdAt', 'updatedAt']}
        })
        res.json({data:sitViviendas})
    }catch(error){
        console.log(error)
    }
}
export const getSitViviendaById = async (req, res)=>{
    try{
        const {id} = req.params
        const sitViviendas = await SitViviendas.findByPk(id)

        if(!sitViviendas){
            return res.status(404).json('SitVivienda no encontrado')
        }
        res.json({data: sitViviendas})
    }catch(error){
        console.log(error)
    }
}
export const updateSitVivienda = async (req,res)=>{
    try{
        const {id} = req.params
        const sitViviendas = await SitViviendas.findByPk(id)
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
export const deleteSitVivienda = async (req, res)=>{

    try{
        const {id} = req.params
        const sitViviendas = await SitViviendas.findByPk(id)

        if (!sitViviendas) {
            return res.status(404).json('SitVivienda no encontrado')
        }

        await sitViviendas.destroy(req.body)

        res.send({data: "SitVivienda eliminado"})

    } catch(error){
        console.log(error)
    }
}