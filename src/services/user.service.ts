import User from "../models/User";
import AxiosInstance from "../utils/axios.instance";

export default class UserService {
  static async getAllUsers() {
    const { data } = await AxiosInstance.get<User[]>("/users");
    return data;
  }

  static async addUser(firstName: string, lastName: string, age: number) {
    const { data } = await AxiosInstance.post<User>("/users", {
      firstName,
      lastName,
      age,
    });

    return data;
  }
}
