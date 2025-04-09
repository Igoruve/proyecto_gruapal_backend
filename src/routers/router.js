import { Router } from "express";
import userRouter from "../routers/userRouter.js"
const router = Router();

router.get("/", (req, res) => {
  res.send("hello world");
});

router.use("/user", userRouter);

/* 
router.use("/product", productRouter);
 */
export default router;
