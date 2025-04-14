import productController from "./productController.js";


async function getAll(req, res) {
    try {
        const products = await productController.controllerGetAll();
        res.render("product/products", { products });
    } catch (error) {
        console.error(error);
        res.render("product/products", { error: "Internal server error" });
    }
}

async function remove(req, res) {
  try {
    const id = req.params.id;
    const response = await productController.controllerRemove(id);
    res.redirect("/products");
  } catch (error) {
    res.render("layout", { error: "Internal server error" });
  }
}

export default {
  getAll,
  remove,
};
