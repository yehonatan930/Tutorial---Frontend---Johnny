import HttpClient from "./HttpClient";
import User from "../models/User";

export default class UsersAPI extends HttpClient {
  private static classInstance?: UsersAPI;

  private constructor() {
    super("users/");
  }

  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new UsersAPI();
    }

    return this.classInstance;
  }

  public getAllUsers = async () => await this.instance.get<User[]>("/");

  public getUser = async (id: string) => await this.instance.get<User>(`${id}`);

  public getLoggedInUser = async () =>
    await this.instance.get<User>(`currentLoggedIn`);

  public deleteUser = async (id: string) =>
    await this.instance.delete<User>(`${id}`);
}
