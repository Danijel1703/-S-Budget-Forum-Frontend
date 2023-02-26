import { useEffect, useState } from "react";
import FormRenderer from "../../utils/FormRenderer";
import UserModel from "../models/UserModel";
import UserService from "../service/UserService";
import EditUserFields from "./EditUserFields";

function EditUserForm() {
  const onSubmit = (user: UserModel) => {};
  const [roles, setRoles] = useState([]);
  const getRoles = async () => {
    const roles = await UserService.getRoles();
    return roles;
  };
  useEffect(() => {
    getRoles();
  }, []);
  return (
    <FormRenderer
      fields={EditUserFields}
      onSubmit={onSubmit}
      submitPlaceholder={"Submit"}
    />
  );
}

export default EditUserForm;
