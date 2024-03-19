import { Router} from "express";
import {getDescuentos,getDescuento,createDescuento,updateDescuento,deleteDescuento, getDescuentoXComercio, getDescuentoXCategoria} from "../controllers/descuento.controllers.js"

const router = Router();


router.get('/descuento', getDescuentos)
router.post('/descuento', createDescuento ) 
router.put('/descuento/:id',updateDescuento) 
router.delete('/descuento/:id',deleteDescuento)
router.get('/descuento/:id',getDescuento)
router.get('/descuentoxcomercio/:comercioId',getDescuentoXComercio)
router.get('/descuentoxcat/:categoriumId',getDescuentoXCategoria)



export default router;