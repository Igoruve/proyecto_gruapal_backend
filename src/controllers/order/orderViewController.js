import orderController from "./orderController.js";
import { NotLogIn } from "../../utils/errors.js"
async function getByID(req, res) {
  try {
    if (!req.session.user) {
      throw new NotLogIn();
    }
    const id = req.session.user.user_id;

    const order = await orderController.controllerGetByID(id);
    res.render("order/order", { order });
  } catch (error) {
    if (error.statusCode) {
      res.redirect(`/login?error=` + error.message);
    } else {
      res.redirect(`/login?error=` + error.message);
    }
  }
}

async function remove(req, res) {
  try {
    const id = req.session.user.user_id;
    const response = await orderController.controllerRemove(id);
    res.redirect("/order");
  } catch (error) {
    res.render("layout", { error: "Internal server error" });
  }
}

export default {
  getByID,
  remove,
};
