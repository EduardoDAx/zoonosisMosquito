import {Tipos} from '../models/Tipos.js'



export const getTipos = async(req,res) =>{
 try {
      const tipos = await Tipos.findAll();
 
  res.json(tipos)
} catch (error) {
  return res.status(500).json({message: error.message})
}
};

export const getTipo = async(req,res) =>{
 try {
    const {id} = req.params
    const tipo = await Tipos.findOne({
       where:{id}
    })
    if(!tipo) return res.status(404).json({message:"El tipo no existe"})
    res.json(tipo)
 } catch (error) {
    return res.status(500).json({message: error.message})
 }
};
export const createTipo = async(req,res) =>{
 try {
     
         const{nombre}=req.body
     
         const newtipo = await Tipos.create({
             nombre,
            
         })
     
         
         res.json(newtipo)
     }
  catch (error) {
     return res.status(500).json({message: error.message})
  
   }
 
 };


export const updateTipo = async (req,res)=>{
try {
 const {id} = req.params;
 const{nombre}=req.body
 
 
 const tipo =await Tipos.findByPk(id)
 tipo.nombre = nombre
 await tipo.save()
 res.json(tipo)
} catch (error) {
 return res.status(500).json({ message: error.message})
}
}

export const deletetipo = async (req,res)=>{
try {
 const {id} = req.params;
 await Tipos.destroy({
   where:{
      id,
   },
 });
 res.sendStatus(204)
} catch (error) {
 return res.status(500).json({message: error.message})    
}
}