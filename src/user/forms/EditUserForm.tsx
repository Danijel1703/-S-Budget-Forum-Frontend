import { FormRenderer } from "src/utils";
import { UserModel } from "src/user/models";
import { EditUserFields } from "src/user/fields";
import { UserService } from "src/user/service";

function EditUserForm(props: { user: UserModel }) {
  const onSubmit = async (user: UserModel) => {
    await UserService.updateUser(user);
  };
  return (
    <FormRenderer
      fields={EditUserFields}
      onSubmit={onSubmit}
      submitPlaceholder="Edit"
      isEdit={true}
      defaultValues={props.user}
    />
  );
}

export default EditUserForm;
