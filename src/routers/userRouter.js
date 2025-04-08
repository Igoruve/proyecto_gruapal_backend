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
router.post("/:id", (req, res) => {
  const id = req.params.id;
  res.send("Modificamos la info del usuario" + id);
});

//delete
router.post("/:id/delete", (req, res) => {
  const id = req.params.id;
  res.send("Eliminamos el usuario" + id);
});

export default router;
