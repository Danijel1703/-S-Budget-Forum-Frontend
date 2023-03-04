import { UserService } from "src/user/service";
import RegisterFields from "./RegisterFields";

const EditUserFields = [
  ...RegisterFields,
  {
    fieldName: "Role",
    property: "role",
    type: "select",
    selectOptions: {},
    fetchFunc: async () => await UserService.getRoles(),
  },
];

export default EditUserFields;
