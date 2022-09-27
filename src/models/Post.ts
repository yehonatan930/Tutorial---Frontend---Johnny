import User from "./User";

export default class Post {
  id: number;
  photoSrc: string;
  createdAt: Date;
  user: User;
  likes: User[];

  constructor(
    id: number,
    photoSrc: string,
    createdAt: Date,
    user: User,
    likes: User[]
  ) {
    this.id = id;
    this.photoSrc = photoSrc;
    this.createdAt = createdAt;
    this.user = user;
    this.likes = likes;
  }
}
