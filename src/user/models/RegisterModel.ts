import UserModel from "./UserModel";

type RegisterModel = UserModel & {
  password: string;
};

export default RegisterModel;
