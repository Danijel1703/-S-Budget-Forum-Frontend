import { FormRenderer } from "src/utils";
import { LoginModel } from "src/user/models";
import { LoginFields } from "src/user/fields";
import { UserService } from "../service";

function LoginForm() {
  const onSubmit = async (credentials: LoginModel) => {
    await UserService.login(credentials);
  };
  return (
    <FormRenderer
      fields={LoginFields}
      onSubmit={onSubmit}
      submitPlaceholder="Log in"
    />
  );
}
export default LoginForm;
