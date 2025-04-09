import { Router } from "express";
import productRouter from "./productRouter.js"

const router = Router();

router.get("/", (req, res) => {
  res.send("hello world");
});

router.use("/product",productRouter);

/* 
router.use("/stand", standRouter);
router.use("/product", productRouter);
 */
export default router;
