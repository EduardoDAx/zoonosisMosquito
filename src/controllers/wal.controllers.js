
import { Wallet } from "../models/wallet.js"


export const getWallets = async (req,res)=>{
    try {
        const wallet = await Wallet.findAll()
    res.json(wallet) 
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const getWallet = async(req,res) =>{
    try {
       const {id} = req.params
       const wallet = await Wallet.findOne({
          where:{id}
       })
       if(!wallet) return res.status(404).json({message:"La Wallet no existe"})
       res.json(wallet)
    } catch (error) {
       return res.status(500).json({message: error.message})
    }
   };

export const createWallet = async (req,res)=>{
    try {
    
        const{monto,usuarioId}=req.body
    
        const newWallet = await Wallet.create({
            monto,
            usuarioId
        })
    
        
        res.json(newWallet)
    }
 catch (error) {
    return res.status(500).json({message: error.message})
 
  }
};


export const updateWallet = async (req,res)=>{
    try {
       const {id} = req.params;
       const wallet =await Wallet.findOne({
       where:{id}
    })
    wallet.set(req.body); 
         await wallet.save();
       res.json(wallet);
    } catch (error) {
       return res.status(500).json({ message: error.message})
    }
    }

export const deleteWallet = async (req,res)=>{
        try {
         const {id} = req.params;
         await Wallet.destroy({
           where:{
              id,
           },
         });
         res.sendStatus(204)
        } catch (error) {
         return res.status(500).json({message: error.message})    
        }
      }