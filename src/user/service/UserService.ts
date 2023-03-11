import axios from "axios";
import { RegisterModel, LoginModel, UserFilterModel } from "src/user/models";
import { BuildFilter } from "src/utils";

class Service {
  baseUrl = "http://api.forum.local/user";

  async register(user: RegisterModel) {
    await axios.post(`${this.baseUrl}/register`, user);
  }

  async login(credentials: LoginModel) {
    const token = await axios.post(`${this.baseUrl}/login`, credentials);
    return token;
  }

  async getRoles() {
    const respose = await axios.get(`${this.baseUrl}/roles`);
    return respose.data;
  }

  async getUsers(filter?: UserFilterModel) {
    const params = BuildFilter(filter);
    const respose = await axios.get(`${this.baseUrl + params}`);
    return respose.data;
  }

  async getUserById(id: string) {
    const respose = await axios.get(`${this.baseUrl}/${id}`);
    return respose.data;
  }
}

const UserService = new Service();
export default UserService;
