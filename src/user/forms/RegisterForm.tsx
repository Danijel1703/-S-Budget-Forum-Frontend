import FormRenderer from "../../utils/FormRenderer";
import RegisterModel from "../models/RegisterModel";
import RegisterFields from "./RegisterFields";

function RegisterForm() {
  const onSubmit = (user: RegisterModel) => {};
  return (
    <FormRenderer
      fields={RegisterFields}
      onSubmit={onSubmit}
      submitPlaceholder={"Submit"}
    />
  );
}

export default RegisterForm;
