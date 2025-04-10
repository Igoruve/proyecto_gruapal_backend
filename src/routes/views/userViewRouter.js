import { Router } from "express";
import userViewController from "../../controllers/user/userViewsController.js";

const router = Router();

//create
router.post("/",userViewController.create);

//update
router.get("/:id", userViewController.getByID);

//delete
router.get("/:id/delete", userViewController.remove);

export default router;


