import { Router} from "express";
import { 
    createUser,
    deleteUsuario,
    getUsers,
    updateUsuario,
 } from "../controllers/proyect.controller.js";

const router = Router();

router.get("/users",getUsers);
router.post("/user",createUser);
router.put("/user/:id",updateUsuario);
router.delete("/users/:id",deleteUsuario);
router.get("/user/:id");


export default router;