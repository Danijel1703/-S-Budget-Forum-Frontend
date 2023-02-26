import LoginModel from "../models/LoginModel";
import UserService from "../service/UserService";

function LoginPage() {
  const form: LoginModel = {
    email: "",
    password: "",
  };

  const onChange = (property: string, value: string) => {
    form[property as keyof typeof form] = value;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await UserService.login(form);
  };
  return (
    <div>
      <div>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Enter Email"
            onChange={(e) => {
              onChange("email", e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Password"
            onChange={(e) => {
              onChange("password", e.target.value);
            }}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
