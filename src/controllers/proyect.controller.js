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


export const createUser = async(req,res) =>{
try {
    
        const{name,surename,email,password,isAdmin}=req.body
    
        const newUsuario = await Usuarios.create({
            name,
            surename,
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


export const updateUsuario = async (req,res)=>{}

export const deleteUsuario = async (req,res)=>{
    console.log(req.params,id)
    res.send('deleting user')
}