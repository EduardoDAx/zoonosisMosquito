 import {Usuarios} from '../models/usuario.js'



export const getUsers = async(req,res) =>{
 try {
    const usuarios = await Usuarios.findAll();
    console.log(usuarios)
    res.json(usuarios)
 } catch (error) {
    return res.status(500).json({message: error.message})
 }
};

export const getUser = async(req,res) =>{
   try {
      const {id} = req.params
      const usuario = await Usuarios.findOne({
         where:{id}
      })
      if(!usuario) return res.status(404).json({message:"El usuario no existe"})
      res.json(usuario)
   } catch (error) {
      return res.status(500).json({message: error.message})
   }
  };
export const createUser = async(req,res) =>{
try {
    
        const{name,surename,email,password,isAdmin}=req.body
    
        const newUsuario = await Usuarios.create({
            name,
            surename,
            age,
            gender,
            email,
            password,
            isAdmin
        })
    
        
        res.json(newUsuario)
    }
 catch (error) {
    return res.status(500).json({message: error.message})
 
  }

};


export const updateUsuario = async (req,res)=>{
try {
   const {id} = req.params;
   const{name,surename,email,password}=req.body
   
   
   const user =await Usuarios.findByPk(id)
   user.name = name
   user.surename =surename
   user.email = email
   user.password = password
   console.log(user)
   
   await user.save()
   res.json(user)
} catch (error) {
   return res.status(500).json({ message: error.message})
}
}

export const deleteUsuario = async (req,res)=>{
  try {
   const {id} = req.params;
   await Usuarios.destroy({
     where:{
        id,
     },
   });
   res.sendStatus(204)
  } catch (error) {
   return res.status(500).json({message: error.message})    
  }
}