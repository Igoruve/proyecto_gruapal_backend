import { Router } from "express";
import userRouter from "../routers/userRouter.js"
import productRouter from "./productRouter.js"
const router = Router();

router.get("/", (req, res) => {
  res.send("hello world");
});

router.use("/product",productRouter);

export default router;
