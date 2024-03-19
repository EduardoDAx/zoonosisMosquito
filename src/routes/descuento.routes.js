import { Router} from "express";
import {getDescuentos,getDescuento,createDescuento,updateDescuento,deleteDescuento} from "../controllers/descuento.controllers.js"

const router = Router();


router.get('/descuento', getDescuentos)
router.post('/descuento', createDescuento ) 
router.put('/descuento/:id',updateDescuento) 
router.delete('/descuento/:id',deleteDescuento)
router.get('/descuento/:id',getDescuento)



export default router;