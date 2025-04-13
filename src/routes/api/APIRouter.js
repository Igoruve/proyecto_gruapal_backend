import { Router } from "express";
import userAPIRouter from "./userAPIRouter.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Welcome friends!");
});

router.use("/user", userAPIRouter);

export default router;
