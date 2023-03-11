import { UserService } from "src/user/service";
import RegisterFields from "./RegisterFields";

const EditUserFields = [
  ...RegisterFields,
  {
    fieldName: "Role",
    property: "roleId",
    type: "select",
    fetchFunc: async () => await UserService.getRoles(),
  },
];

export default EditUserFields;
