import "./Profile.css";
import Avatar from "@mui/material/Avatar";
import { useContext, useEffect, useState } from "react";
import { LoggedInUserContext } from "../../contexts/LoggedInUserContext";
import Typography from "@mui/material/Typography";
import PostsList from "../../components/PostsList/PostsList";
import User from "../../models/User";
import PostDTO from "../../dto/PostDTO";
import UsersAPI from "../../api/UsersAPI";
import { useLocation } from "react-router-dom";
import { Skeleton } from "@mui/material";

const Profile = () => {
  const [userPosts, setUserPosts] = useState<PostDTO[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const { state } = useLocation();
  const loggedInUserContext = useContext(LoggedInUserContext);

  const fetchUser = async (userName: string) => {
    const { data } = await UsersAPI.getInstance().getUser(userName);
    setUser(data);
  };

  useEffect(() => {
    if (state?.userName) {
      fetchUser(state.userName);

      const getAllPostCardsOfUser = async (username: string) => {
        const { data } = await UsersAPI.getInstance().getUserPosts(username);

        setUserPosts(data);
      };

      getAllPostCardsOfUser(state.userName);
    } else {
      setUser(loggedInUserContext.user);
    }
  }, [state?.userName]);

  return (
    <>
      <div id="profile-header">
        {user ? (
          <>
            <Avatar
              sx={{ width: "6rem", height: "6rem" }}
              src={user.avatarSrc}
            />
            <Typography variant="h5" sx={{}}>
              {user.name}
            </Typography>
          </>
        ) : (
          <>
            <Skeleton
              animation="wave"
              variant="circular"
              width={"6rem"}
              height={"6rem"}
            />
            <Skeleton animation="wave" height={10} />
          </>
        )}
      </div>
      <PostsList posts={userPosts}></PostsList>
    </>
  );
};

export default Profile;
