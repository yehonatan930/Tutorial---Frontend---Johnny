import "./Profile.css";
import Avatar from "@mui/material/Avatar";
import { useContext, useEffect, useState } from "react";
import { LoggedInUserContext } from "../../contexts/LoggedInUserContext";
import Typography from "@mui/material/Typography";
import PostsList from "../../components/PostsList/PostsList";
import User from "../../models/User";
import PostDTO from "../../models/PostDTO";
import UsersAPI from "../../api/UsersAPI";

const Profile = () => {
  const loggedInUserContext = useContext(LoggedInUserContext);
  const user = loggedInUserContext.user;

  const [userPosts, setUserPosts] = useState<PostDTO[]>([]);

  useEffect(() => {
    const getAllPostCardsOfUser = async (user: User) => {
      const { data } = await UsersAPI.getInstance().getUserPosts(user.name);
      setUserPosts(data);
    };
    getAllPostCardsOfUser(user!);
  }, [user]);

  return (
    <>
      <div id="profile-header">
        <Avatar sx={{ width: "6rem", height: "6rem" }} src={user?.avatarSrc} />
        <Typography variant="h5" sx={{}}>
          {user?.name}
        </Typography>
      </div>
      <PostsList posts={userPosts}></PostsList>
    </>
  );
};

export default Profile;
