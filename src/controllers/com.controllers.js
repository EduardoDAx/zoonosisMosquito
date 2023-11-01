
import { Comercio } from "../models/comercio.js"


export const getComercios = async (req,res)=>{
    try {
        const comercio = await Comercio.findAll()
    res.json(comercio) 
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const getComercio = async(req,res) =>{
    try {
       const {id} = req.params
       const comercio = await Comercio.findOne({
          where:{id}
       })
       if(!comercio) return res.status(404).json({message:"El comercio no existe"})
       res.json(comercio)
    } catch (error) {
       return res.status(500).json({message: error.message})
    }
   };

export const createComercio = async (req,res)=>{
    try {
    
        const{name,rubro,direccion,cod_Com,usuarioId}=req.body
    
        const newComercio = await Comercio.create({
            name,
            rubro,
            direccion,
            cod_Com,
            usuarioId
        })
    
        
        res.json(newComercio)
    }
 catch (error) {
    return res.status(500).json({message: error.message})
 
  }
};


export const updateComercio = async (req,res)=>{
    try {
       const {id} = req.params;
       const comercio =await Comercio.findOne({
       where:{id}
    })
         comercio.set(req.body); 
         await comercio.save();
       res.json(comercio);
    } catch (error) {
       return res.status(500).json({ message: error.message})
    }
    }

export const deleteComercio = async (req,res)=>{
        try {
         const {id} = req.params;
         await Comercio.destroy({
           where:{
              id,
           },
         });
         res.sendStatus(204)
        } catch (error) {
         return res.status(500).json({message: error.message})    
        }
      }