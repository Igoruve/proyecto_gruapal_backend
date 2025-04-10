import userModel from "../../models/userModel.js";

async function controllerGetByID(id) {
  const user = await userModel.findByPk(id);
  return user;
}

async function controllerGetAll() {
  const user = await userModel.findAll();
  return user;
}

async function controllerCreate(data) {
  data.created_at = new Date();
  const response = await userModel.create(data);
  return response;
}

async function controllerEdit(id, data) {
  const result = await userModel.update(data, {
    where: {
      user_id: id,
    },
  });
  return result;
}

async function controllerRemove(id) {
  const result = await userModel.destroy({
    where: {
      user_id: id,
    },
  });
  return result;
}

export default {
  controllerGetByID,
  controllerGetAll,
  controllerCreate,
  controllerEdit,
  controllerRemove,
};
