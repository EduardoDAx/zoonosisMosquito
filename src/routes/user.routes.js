import { Router} from "express";
import { 
    createUser,
    deleteUsuario,
    getUsers,
    updateUsuario,
    getUser,
 } from "../controllers/user.controller.js";

const router = Router();

router.get("/users",getUsers);
router.post("/user",createUser);
router.put("/user/:id",updateUsuario);
router.delete("/user/:id",deleteUsuario);
router.get("/user/:id",getUser);


export default router;