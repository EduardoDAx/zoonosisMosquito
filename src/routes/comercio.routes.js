import { Router} from "express";
import {getComercios,createComercio,deleteComercio,updateComercio,getComercio, getoneuserComercios} from "../controllers/com.controllers.js"

const router = Router();


router.get('/comercio',getComercios)
router.post('/comercio', createComercio) 
router.put('/comercio/:id',updateComercio) 
router.delete('/comercio/:id',deleteComercio)
router.get('/comercio/:id',getComercio)
router.get('/usercomercio/:id',getoneuserComercios)



export default router;