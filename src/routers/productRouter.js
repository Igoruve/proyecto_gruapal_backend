import  { Router } from "express";
import productController from "../controllers/productController.js";

const router = Router();

router.get("/", (req, res) => {
    res.send("Conseguir todos los productos")
});

router.post("/:id", productController.getById);

router.post("/",(req,res)=>{
    res.send("Creamos un producto");
})

router.post("/:id",(req,res)=>{
    const id = req.params.id;
    const datos = req.body;
    res.send("Modificamos el producto ", id);
})

router.post("/:id/delete",(req,res)=>{
    const id = req.params.id;
    res.send("Borramos el producto ", id);
})

export default router;