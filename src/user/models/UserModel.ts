import Role from "./RoleModel";

type UserModel = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  roleId: string;
  role?: Role;
};

export default UserModel;
