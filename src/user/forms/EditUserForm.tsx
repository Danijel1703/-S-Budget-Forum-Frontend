import { FormRenderer } from "src/utils";
import { UserModel } from "src/user/models";
import { EditUserFields } from "src/user/fields";

function EditUserForm() {
  const onSubmit = (user: UserModel) => {};
  return (
    <FormRenderer
      fields={EditUserFields}
      onSubmit={onSubmit}
      submitPlaceholder={"Submit"}
    />
  );
}

export default EditUserForm;
