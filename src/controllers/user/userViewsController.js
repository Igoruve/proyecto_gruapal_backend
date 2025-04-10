import userController from "./userController.js";

async function getByID(req, res) {
  const id = req.params.id;
  const user = await userController.controllerGetByID(id);
  res.json(user);
}

async function getAll(req, res) {
  const user = await userController.controllerGetAll();
  res.json(user);
}

async function create(req, res) {
  const response = await userController.controllerCreate(req.body);
  res.json(response);
}

async function edit(req, res) {
  const id = req.params.id;
  const response = await userController.controllerEdit(id, req.body);
  res.json(response);
}

async function remove(req, res) {
  const id = req.params.id;
  const response = await userController.controllerRemove(id);
  res.json(response);
}

export default {
  getAll,
  getByID,
  create,
  edit,
  remove,
};
