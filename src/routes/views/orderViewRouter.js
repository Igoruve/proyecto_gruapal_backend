import { Router } from "express";
import orderViewController from "../../controllers/order/orderViewController.js";
const router = Router();

//update
router.get("/", orderViewController.getByID);

//delete
router.get("/delete", orderViewController.remove);

export default router;