import orderModel from "../../models/orderModel.js";
import productModel from "../../models/productModel.js"

async function controllerGetByID(id) {
  const order = await orderModel.findByPk(id, {
    include: productModel
  });
  return order;
}

async function controllerGetByUserID(id) {
  const order = await orderModel.findOne({
    where: {user_id:id},
    include: productModel
  });
  return order;
}

async function controllerCreate(user_id) { 
  const result = await orderModel.create({
    user_id:user_id,
    created_at:new Date(),
    updated_at:new Date(),
    take_away:false
  });
  return result;
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
  controllerGetByUserID,
  controllerCreate,
  controllerRemove,
  
};
