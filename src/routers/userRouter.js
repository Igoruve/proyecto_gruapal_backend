import { Router } from "express";
import userController from "../controllers/userController.js";

const router = Router();

//create
router.post("/", userController.createForm);

//read
router.get("/", userController.getAll);

//update
/* router.get("/:id", userController.getById);
 */
router.get("/:id", userController.getByID);

//delete
router.get("/:id/delete", userController.remove);

export default router;
