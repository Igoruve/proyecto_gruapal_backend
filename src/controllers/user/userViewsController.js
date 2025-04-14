import userController from "./userController.js";

async function getByID(req, res) {
  try {
    const id = req.params.id;
    const user = await userController.controllerGetByID(id);
    res.render("user/show", { user });
  } catch (error) {
    console.error(error);
    res.render("layout", { error: "Internal server error" });
  }
}

async function create(req, res) {
  try {
    const response = await userController.controllerCreate(req.body);
    
    res.redirect("/user");
  } catch (error) {
    console.error(error);
    if (error.statusCode) {
      res.redirect("/user/new?error=" + error.message);
    } else {
      res.redirect("/user/new?error=Internal+server+error");
    }
  }
}

async function edit(req, res) {
  const id = req.params.id;
  try {
    const response = await userController.controllerEdit(id, req.body);
    res.redirect("/user/" + id);
  } catch (error) {
    if (error.statusCode) {
      res.redirect(`/user/${id}/edit?error=` + error.message);
    } else {
      res.render("layout", { error: "Internal server error" });
    }
  }
}

async function remove(req, res) {
  try {
    const id = req.params.id;
    const response = await userController.controllerRemove(id);
    res.redirect("/user");
  } catch (error) {
    res.render("layout", { error: "Internal server error" });
  }
}

export default {
  getByID,
  create,
  edit,
  remove,
};
