import { Categoria } from "../models/categoria"


export const getCategorias = async (req,res)=>{
    try {
        const categoria = await Categoria.findAll()
    res.json(categoria) 
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const getCategoria = async(req,res) =>{
    try {
       const {id} = req.params
       const categoria = await Categoria.findOne({
          where:{id}
       })
       if(!categoria) return res.status(404).json({message:"La Categoria no existe"})
       res.json(categoria)
    } catch (error) {
       return res.status(500).json({message: error.message})
    }
   };

export const createCategoria = async (req,res)=>{
    try {
    
        const{tipo,description}=req.body
    
        const newCategoria = await Categoria.create({
            tipo,
            description,
        })
    
        
        res.json(newCategoria)
    }
 catch (error) {
    return res.status(500).json({message: error.message})
 
  }
};


export const updateCategoria = async (req,res)=>{
    try {
       const {id} = req.params;
       const categoria =await Categoria.findOne({
       where:{id}
    })
    categoria.set(req.body); 
         await categoria.save();
       res.json(categoria);
    } catch (error) {
       return res.status(500).json({ message: error.message})
    }
    }

export const deleteCategoria = async (req,res)=>{
        try {
         const {id} = req.params;
         await Categoria.destroy({
           where:{
              id,
           },
         });
         res.sendStatus(204)
        } catch (error) {
         return res.status(500).json({message: error.message})    
        }
      }