import { Categoria } from "../models/categoria.js"
import { Comercio } from "../models/comercio.js"
import { Descuento } from "../models/descuento.js"

export const getDescuentos = async (req,res)=>{
    try {
        const descuentos = await Descuento.findAll()
        res.json(descuentos) 
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const getDescuento = async(req,res) =>{
    try {
       const {id} = req.params
       const descuento = await Descuento.findOne({
          where:{id},
          include: [{ model: Categoria }],
       })
       if(!descuento) return res.status(404).json({message:"El descuento no existe"})
       res.json(descuento)
    } catch (error) {
       return res.status(500).json({message: error.message})
    }
};
export const getDescuentoXComercio = async(req,res) =>{
    try {
       const {comercioId} = req.params
       const descuento = await Descuento.findAll({
          where:{comercioId},
          include: [{ model: Comercio }],
       })
       if(!descuento) return res.status(404).json({message:"No existen descuentos"})
       res.json(descuento)
    } catch (error) {
       return res.status(500).json({message: error.message})
    }
};
export const getDescuentoXCategoria = async(req,res) =>{
    try {
       const {categoriumId} = req.params
       const descuento = await Descuento.findAll({
          where:{categoriumId},
          include: [{ model: Categoria }],
       })
       if(!descuento) return res.status(404).json({message:"No existen descuentos"})
       res.json(descuento)
    } catch (error) {
       return res.status(500).json({message: error.message})
    }
};

export const createDescuento = async (req,res)=>{
    try {
        const { title, description, descuento, comercioId,categoriumId } = req.body
    
        const newDescuento = await Descuento.create({
            title,
            description,
            descuento,
            comercioId,
            categoriumId
        })
    
        res.json(newDescuento)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

export const updateDescuento = async (req,res)=>{
    try {
       const {id} = req.params;
       const descuento = await Descuento.findOne({
       where:{id}
    })
    descuento.set(req.body); 
    await descuento.save();
    res.json(descuento);
    } catch (error) {
       return res.status(500).json({ message: error.message})
    }
}

export const deleteDescuento = async (req,res)=>{
    try {
       const {id} = req.params;
       await Descuento.destroy({
         where:{
            id,
         },
       });
       res.sendStatus(204)
    } catch (error) {
       return res.status(500).json({message: error.message})    
    }
}
