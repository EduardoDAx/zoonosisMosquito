import { Router} from "express";
import { 
    createUser,
    deleteUsuario,
    getUsers,
    updateUsuario,
    getUser,
 } from "../controllers/user.controller.js";
 import { loginUser } from "../auth/authController.js";
const router = Router();

router.get("/user",getUsers);
router.post("/auth/register",createUser);
router.put("/user/:id",updateUsuario);
router.delete("/user/:id",deleteUsuario);
router.get("/user/:id",getUser);
router.post("/auth/login",loginUser);

export default router;