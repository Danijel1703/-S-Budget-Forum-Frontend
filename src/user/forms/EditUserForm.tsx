import { FormRenderer } from "src/utils";
import { UserModel } from "src/user/models";
import { EditUserFields } from "src/user/fields";

function EditUserForm(props: { user: UserModel }) {
  const onSubmit = (user: UserModel) => {
    console.log(user);
  };
  return (
    <FormRenderer
      fields={EditUserFields}
      onSubmit={onSubmit}
      submitPlaceholder={"Submit"}
      isEdit={true}
      defaultValues={props.user}
    />
  );
}

export default EditUserForm;
