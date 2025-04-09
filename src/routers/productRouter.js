import  { Router } from "express";
import productController from "../controllers/productController.js";

const router = Router();

router.get("/", (req, res) => {
    res.send("Conseguir todos los productos")
});

router.post("/:id", productController.getById);

router.post("/:id/delete", (req, res) => {
    const id = req.params.id;
    res.send("Eliminamos el usuario: ", id);
});

export default router;