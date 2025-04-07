import {Router} from "express";
import orderController from "../controllers/orderController.js" // default

const router = Router();

// conseguir todos los stands
router.get("/",orderController.getAll)
// crear un stand
router.get("/new",orderController.createForm)
router.post("/",orderController.create)
// conseguir stand por id
router.get("/:id",orderController.getByID)
// modificar un stand
router.get("/:id/edit",orderController.editForm)
router.post("/:id",orderController.edit)

// ruta para eliminar un stand
router.post("/:id/delete",orderController.remove)

export default router;