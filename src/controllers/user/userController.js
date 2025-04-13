import { UserNameNotProvided, UserRoleIncorrect } from "../../utils/errors.js";
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
  const result = await userModel.create(data);
  return result;
}

async function controllerEdit(id, data) {
  const userRole = ["customer", "seller"];
  if (data.role) {
    data.role = data.role.toLowerCase();
    if (!userRole.includes(data.role)) {
      throw new UserRoleIncorrect();
    }
  }
  const result = await userModel.update(data, {
    where: {
      user_id: id,
    },
  });
  const updatedUser = await userModel.findByPk(id);
  return updatedUser;
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
