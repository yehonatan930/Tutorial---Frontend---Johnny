import HttpClient from "./HttpClient";
import Post from "../models/Post";
import PostDTO from "../models/PostDTO";

export default class PostsAPI extends HttpClient {
  private static classInstance?: PostsAPI;

  private constructor() {
    super("posts/");
  }

  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new PostsAPI();
    }

    return this.classInstance;
  }

  public getAllPosts = async () => await this.instance.get<Post[]>("");
  public getAllPostCards = async () =>
    await this.instance.get<PostDTO[]>("postCards");

  public getPost = async (id: string) => await this.instance.get<Post>(`${id}`);

  public deletePost = async (id: string) =>
    await this.instance.delete<Post>(`${id}`);
}
