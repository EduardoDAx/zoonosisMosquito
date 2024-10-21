import { Router} from "express";
import { createTipo, deletetipo, getTipos, updateTipo,getTipo } from "../controllers/tipos.controller.js";

const router = Router();

router.get("/tipos",getTipos);
router.post("/tipo",createTipo);
router.put("/tipo/:id",updateTipo);
router.delete("/tipo/:id",deletetipo);
router.get("/tipo/:id",getTipo );


export default router;