import productModel from "../../models/productModel.js";

async function controllerGetByID(id) {
  const product = await productModel.findByPk(id);
  return product;
}

async function controllerGetAll() {
  const product = await productModel.findAll();
  return product;
}

async function controllerRemove(id) {
  const result = await productModel.destroy({
    where: {
      product_id: id,
    },
  });
  return result;
}

export default {
  controllerGetByID,
  controllerGetAll,
  controllerRemove,
};
