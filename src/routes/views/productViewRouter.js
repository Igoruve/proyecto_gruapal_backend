import { Router } from "express";
import productViewController from "../../controllers/product/productViewController.js";

const router = Router();

//create
router.get("/",productViewController.getAll);

//update
router.get("/:id", productViewController.getByID);

//delete
router.get("/:id/delete", productViewController.remove);

export default router;