import userController from "./userController.js";

async function getByID(req, res) {
  const id = req.params.id;
  const user = await userController.controllerGetByID(id);
  res.render("user/show", { user });
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
  res.redirect("/user");
}

export default {
  getByID,
  create,
  edit,
  remove,
};
