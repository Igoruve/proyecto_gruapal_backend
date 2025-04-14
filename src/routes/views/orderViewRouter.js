import { Router } from "express";
import orderViewController from "../../controllers/order/orderViewController.js";
import orderMiddleware from "../../middlewares/orderProductMiddleware.js";
const router = Router();

//update
router.get("/", orderViewController.getByID);

//delete
router.get("/delete", orderViewController.remove);

router.post("/:id", orderMiddleware.removeFromOrder);

export default router;