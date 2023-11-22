import { Router} from "express";
import {getCategorias,getCategoria,createCategoria,updateCategoria,deleteCategoria} from "../controllers/wal.controllers"

const router = Router();


router.get('/categoria', getCategorias)
router.post('/categoria',  createCategoria) 
router.put('/categoria/:id',updateCategoria) 
router.delete('/categoria/:id',deleteCategoria)
router.get('/categoria/:id',getCategoria)



export default router;