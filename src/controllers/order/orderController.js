import orderModel from "../../models/orderModel.js";
import productModel from "../../models/productModel.js"

async function controllerGetByID(id) {
  const order = await orderModel.findByPk(id, {
    include: productModel
  });
  return order;
}

async function controllerRemove(id) {
  const result = await orderModel.destroy({
    where: {
      order_id: id,
    },
  });
  return result;
}

export default {
  controllerGetByID,
  controllerRemove,
};
