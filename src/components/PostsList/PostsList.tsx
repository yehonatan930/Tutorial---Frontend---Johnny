import "./PostsList.css";
import PostDTO from "../../models/PostDTO";
import PostCard from "../PostCard/PostCard";

interface PostsListProps {
  posts: PostDTO[];
}
const PostsList = ({ posts }: PostsListProps) => {
  return (
    <div id="posts-list--container">
      {posts &&
        posts.map((post) => {
          return <PostCard key={post.id} {...post}></PostCard>;
        })}
    </div>
  );
};

export default PostsList;
