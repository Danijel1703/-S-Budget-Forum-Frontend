import { FormRenderer } from "src/utils";
import { RegisterFields } from "src/user/fields";
import { RegisterModel } from "src/user/models";
import { UserService } from "src/user/service";

function RegisterForm() {
  const onSubmit = async (user: RegisterModel) => {
    await UserService.register(user);
  };
  return (
    <FormRenderer
      fields={RegisterFields}
      onSubmit={onSubmit}
      submitPlaceholder={"Submit"}
    />
  );
}

export default RegisterForm;
