import productController from "../controllers/product/productController.js";
import orderController from "../controllers/order/orderController.js";

async function addToOrder(req, res) {
  try {
    const productId = req.params.id;
    const userId = req.session.user.user_id;
    const order = await orderController.controllerGetByUserID(userId);
    const product = await productController.controllerGetByID(productId);
    order.addProduct(product);
    res.redirect("/products");
  } catch (error) {
    console.error(error);
    res.redirect("/products");
  }
}

async function removeFromOrder(req, res) {
    try {
      const id = req.params.id;
      const userId = req.session.user.user_id;
      const order = await orderController.controllerGetByUserID(userId);
      const product = await productController.controllerGetByID(id);
      order.removeProduct(product);
      res.redirect("/orders");
    } catch (error) {
      console.error(error);
      res.render("product", { error: "Internal server error" });
    }
  }

export default {
    addToOrder,
    removeFromOrder
};