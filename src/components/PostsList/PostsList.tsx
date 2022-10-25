import "./PostsList.css";
import PostDTO from "../../dto/PostDTO";
import PostCard from "../PostCard/PostCard";
import PostCardPlaceholder from "../PostCard/PostCardPlaceholder";
import FadeIn from "react-fade-in";
import CircularProgress from "@mui/material/CircularProgress";

interface PostsListProps {
  posts: PostDTO[] | null;
  loading?: boolean;
  bottomViewRef?: (node?: Element | null) => void;
}
const PostsList = ({ posts, loading, bottomViewRef }: PostsListProps) => {
  return (
    <>
      <FadeIn
        className="posts-list--container"
        childClassName="posts-list--child"
      >
        {posts ? (
          posts.map((post) => <PostCard key={post.id} {...post}></PostCard>)
        ) : (
          <>
            <PostCardPlaceholder />
            <PostCardPlaceholder />
            <PostCardPlaceholder />
            <PostCardPlaceholder />
            <PostCardPlaceholder />
          </>
        )}
        {loading && (
          <CircularProgress
            size={40}
            sx={{
              display: "inherit",
              margin: 1,
              marginLeft: "auto",
              marginRight: "auto",
            }}
            variant="indeterminate"
          ></CircularProgress>
        )}
        {bottomViewRef && (
          <div className="bottom-elemnt" ref={bottomViewRef}></div>
        )}
      </FadeIn>
    </>
  );
};

export default PostsList;
