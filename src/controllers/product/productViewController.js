import productController from "./productController.js";

async function getByID(req, res) {
  try {
    const id = req.params.id;
    const product = await productController.controllerGetByID(id);
    res.render("product/show", { product });
  } catch (error) {
    console.error(error);
    res.render("product", { error: "Internal server error" });
  }
}

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
  getByID,
  getAll,
  remove,
};
