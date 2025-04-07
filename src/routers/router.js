import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("hello world");
});

/* 
router.use("/stand", standRouter);
router.use("/product", productRouter);
 */
export default router;
