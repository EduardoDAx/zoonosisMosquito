import { Router} from "express";
import {getCupons,getCupon,createCupon,updateCupon,deleteCupon} from "../controllers/cupon.controllers"

const router = Router();


router.get('/cupon', getCupons)
router.post('/cupon', createCupon ) 
router.put('/cupon/:id',updateCupon) 
router.delete('/cupon/:id',deleteCupon)
router.get('/cupon/:id',getCupon)



export default router;