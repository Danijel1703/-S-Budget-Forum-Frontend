import axios from "axios";
import LoginModel from "../models/LoginModel";
import RegisterModel from "../models/RegisterModel";
import Role from "../models/RoleModel";

class Service {
  baseUrl = "http://api.forum.local/user";

  async register(user: RegisterModel) {
    await axios.post(`${this.baseUrl}/register`, user);
  }

  async login(user: LoginModel) {
    await axios.post(`${this.baseUrl}/login`, user);
  }

  async getRoles() {
    const respose = await axios.get(`${this.baseUrl}/roles`);
    return respose.data;
  }
}

const UserService = new Service();
export default UserService;
