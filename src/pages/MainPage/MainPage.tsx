import { useEffect, useState } from "react";
import PostsAPI from "../../AxiosInstances/PostsAPI";
import PostCard from "../../components/PostCard/PostCard";
import PostDTO from "../../models/PostDTO";
import "./MainPage.css";

const MainPage = () => {
  const [allPosts, setAllPosts] = useState<PostDTO[]>([]);

  useEffect(() => {
    const getAllPostCards = async () => {
      const { data } = await PostsAPI.getInstance().getAllPostCards();
      setAllPosts(data);
    };
    getAllPostCards();
  }, []);

  return (
    <div id="main-page--container">
      {allPosts.map((post) => {
        console.log(post);
        return <PostCard key={post.id} {...post}></PostCard>;
      })}
    </div>
  );
};

export default MainPage;
