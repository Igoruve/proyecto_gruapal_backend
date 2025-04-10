import { Router } from "express";
//import userViewRouter from "./userViewRouter.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Welcome friends!");
});

//router.use("/user", userViewRouter);

export default router;
