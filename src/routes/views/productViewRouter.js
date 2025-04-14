import { Router } from "express";
import productViewController from "../../controllers/product/productViewController.js";
import productMiddleware from "../../middlewares/orderProductMiddleware.js";

const router = Router();

//create
router.get("/",productViewController.getAll);

//update
router.post("/:id", productMiddleware.addToOrder);

//delete
router.get("/:id/delete", productViewController.remove);

export default router;