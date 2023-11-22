import { Router} from "express";
import {getWallets,getWallet,createWallet,updateWallet,deleteWallet} from "../controllers/wal.controllers.js"

const router = Router();


router.get('/wallet',getWallets )
router.post('/wallet', createWallet ) 
router.put('/wallet/:id',updateWallet) 
router.delete('/wallet/:id',deleteWallet)
router.get('/wallet/:id',getWallet)




export default router;