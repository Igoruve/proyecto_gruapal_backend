import { Router } from "express";
import userAPIController from "../../controllers/user/userAPIController.js";

const router = Router();

//read
router.get("/", userAPIController.getAll);

//update
router.get("/:id", userAPIController.getByID);

//delete
router.get("/:id/delete", userAPIController.remove);

export default router;
