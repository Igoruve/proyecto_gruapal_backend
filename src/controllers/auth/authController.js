import User from "../../models/userModel.js";
import { hash, compare } from "../../utils/bcrypt.js";
import {
  UserNameNotProvided,
  UserEmailNotProvided,
  UserPasswordNotProvided,
  UserRoleIncorrect,
  UserEmailAlreadyExists,
  UserInvalidCredentials,
} from "../../utils/errors.js";

async function register(userData) {
  //const {name,email,password,role} = req.body;
  console.log(userData);
  if (!userData.first_name) {
    throw new UserNameNotProvided();
  }
  if (!userData.email) {
    throw new UserEmailNotProvided();
  }
  if (!userData.password) {
    throw new UserPasswordNotProvided();
  }
  userData.create_at=new Date();
  userData.role = userData.role ? userData.role.toLowerCase() : "customer";
  const roles = ["customer"];
  if (!roles.includes(userData.role)) {
    throw new UserRoleIncorrect();
  }
  // TODO passwordConfirm
  const oldUser = await User.findOne({
    where: {
      email: userData.email,
    },
  });
  if (oldUser) {
    throw new UserEmailAlreadyExists();
  }
  const hashedPassword = await hash(userData.password);

  userData.password = hashedPassword;
  const result = await User.create(userData);

  return result;
}

async function login(email, password) {
  if (!email) {
    throw new UserEmailNotProvided();
  }
  if (!password) {
    throw new UserPasswordNotProvided();
  }
  const user = await User.findOne({
    where: {
      email: email,
    },
  });
  if (!user) {
    throw new UserInvalidCredentials();
  }
  const isSamePassword = await compare(password, user.password);
  if (isSamePassword) {
    // si la contraseña es correcta
    return user;
  } else {
    throw new UserInvalidCredentials();
  }
}

export default {
  register,
  login,
};
