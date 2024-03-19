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
          where:{id}
       })
       if(!descuento) return res.status(404).json({message:"El descuento no existe"})
       res.json(descuento)
    } catch (error) {
       return res.status(500).json({message: error.message})
    }
};

export const createDescuento = async (req,res)=>{
    try {
        const { title, description, descuento, comercioId,catId } = req.body
    
        const newDescuento = await Descuento.create({
            title,
            description,
            descuento,
            comercioId,
            catId
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
