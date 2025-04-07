import { Router } from "express";
import userController from "../controllers/userController.js";

const router = Router();

//create
router.post("/", (req,res)=>{
    res.send("Creamos usuario");
})

//read
router.get("/", (req,res)=>{
    res.send("Cositas");
})

//update
router.get("/:id", userController.getById);

router.post("/:id", (req,res)=>{
    const id = req.params.id;
    res.send("Modificamos la info del usuario" + id);
})

//delete
router.post("/:id/delete", (req,res)=>{
    const id = req.params.id;
    res.send("Eliminamos el usuario" + id);
})

export default router;