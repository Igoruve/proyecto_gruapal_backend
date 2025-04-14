import { Router } from "express";
import userViewRouter from "./userViewRouter.js";
import authRouter from "./authViewRouter.js";
import productRouter from "./productViewRouter.js"

const router = Router();

router.get("/", (req, res) => {
  res.send("Welcome friends!");
});

router.use("/user", userViewRouter);
router.use("/", authRouter);
router.use("/products", productRouter);


export default router;
