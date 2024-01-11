
import { Cupon } from "../models/cupon.js"


export const getCupons = async (req,res)=>{
    try {
        const cupon = await Cupon.findAll()
    res.json(cupon) 
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const getCupon = async(req,res) =>{
    try {
       const {id} = req.params
       const cupon = await Cupon.findOne({
          where:{id}
       })
       if(!cupon) return res.status(404).json({message:"El Cupón no existe"})
       res.json(cupon)
    } catch (error) {
       return res.status(500).json({message: error.message})
    }
   };

export const createCupon = async (req,res)=>{
    try {
    
        const{usado,title,description,descuento,comercioId,categoriumId}=req.body
    
        const newCupon = await Cupon.create({
            usado,
            title,
            description,
            descuento,
            comercioId,
            categoriumId
        })
    
        
        res.json(newCupon)
    }
 catch (error) {
    return res.status(500).json({message: error.message})
 
  }
};


export const updateCupon = async (req,res)=>{
    try {
       const {id} = req.params;
       const cupon =await Cupon.findOne({
       where:{id}
    })
    cupon.set(req.body); 
         await cupon.save();
       res.json(cupon);
    } catch (error) {
       return res.status(500).json({ message: error.message})
    }
    }

export const deleteCupon = async (req,res)=>{
        try {
         const {id} = req.params;
         await Cupon.destroy({
           where:{
              id,
           },
         });
         res.sendStatus(204)
        } catch (error) {
         return res.status(500).json({message: error.message})    
        }
      }
