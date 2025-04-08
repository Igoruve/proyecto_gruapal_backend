import userModel from "../models/userModel.js";

/**
 * Gets a user using its id
 * @param {*} req
 * @param {*} res
 */

async function getByID(req, res) {
  const id = req.params.id;
  //const {id} = req.params;
  //res.send("Conseguir el stand "+id);
  const user = await userModel.findByPk(id);
  res.json(user);
  //res.render("stand/show",{stand}); // la ruta de render es a partir de la carpeta views, no la del router
}

/**
 * conseguir todos los users
 * @param {*} req
 * @param {*} res
 */

async function getAll(req, res) {
  const user = await userModel.findAll();
  res.json(user);
  //res.send("Conseguir todos los stands");
  //console.log(stands);
  //const role = req.session.user?.role;
  //res.render("stand/list",{stands,role});
}

async function createForm(req, res) {
  /*   res.render("user/create"); */
}

async function create(req, res) {
  //res.send("Creamos un user");
  const { first_name, last_name, email, password, role } = req.body;
  const creation_date = new Date();
  const response = await userModel.create({
    first_name: first_name,
    last_name: last_name,
    email: email,
    password: password,
    role: role,
  });
  res.json(response);
  //res.redirect("/user");
}

async function editForm(req, res) {
  const id = req.params.id;
  const user = await userModel.findByPk(id);
  if (!user) {
    res.redirect("/user");
  }
  res.render("user/edit", { user });
}

async function edit(req, res) {
  const id = req.params.id;
  const { first_name, last_name, email, password, role } = req.body; // los datos para modificar el user
  const result = await userModel.update(
    {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      role: role,
    },
    {
      where: {
        user_id: id,
      },
    }
  );
  // opción 2
  // const stand = await userModel.findByPk(id);
  // stand.name=name;
  // stand.size=size;
  // stand.creation_date = creation_date;
  // stand.stand_category_id=category_id;
  // await stand.save();

  res.redirect("/stand/" + id);
}

async function remove(req, res) {
  const id = req.params.id;
  const response = await userModel.destroy({
    where: {
      stand_id: id,
    },
  });
  // const stand = await userModel.findByPk(id);
  // await stand.destroy();

  res.redirect("/stand");
}

export { getAll, getByID, createForm, create, edit, remove };

export default {
  getAll,
  getByID,
  createForm,
  create,
  editForm,
  edit,
  remove,
};
