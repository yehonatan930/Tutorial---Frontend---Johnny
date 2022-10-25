import { useEffect, useRef, useState } from "react";
import PostsAPI from "../../api/PostsAPI";
import PostsList from "../../components/PostsList/PostsList";
import PostDTO from "../../dto/PostDTO";
import { useInView } from "react-intersection-observer";

const MainPage = () => {
  const [allPosts, setAllPosts] = useState<PostDTO[] | null>(null);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState(false);

  const { ref, inView } = useInView();

  useEffect(() => {
    if (!loading) {
      console.log(page);
      getPaginatedPostCards();
      setPage(page + 1);
    }
  }, [inView]);

  const getPaginatedPostCards = async () => {
    setLoading(true);

    const { data } = await PostsAPI.getInstance().getFewPostCards(page);

    let prevAllPosts = allPosts;
    if (prevAllPosts) {
      prevAllPosts.push(...data);
    } else {
      prevAllPosts = data;
    }
    setAllPosts(prevAllPosts);

    setLoading(false);
  };

  return (
    <>
      <PostsList
        posts={allPosts}
        loading={loading}
        bottomViewRef={ref}
      ></PostsList>
    </>
  );
};

export default MainPage;
