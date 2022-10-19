import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Typography from "@mui/material/Typography";
import PostDTO from "../../models/PostDTO";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import PostsAPI from "../../api/PostsAPI";
import User from "../../models/User";
import { LoggedInUserContext } from "../../contexts/LoggedInUserContext";

const PostCard = ({
  id,
  photoSrc,
  createdAt,
  avatarSrc,
  userName,
  likesNum,
  isLikedByCurrentUser,
}: PostDTO) => {
  const navigate = useNavigate();
  const [liked, setLiked] = useState<boolean>(isLikedByCurrentUser);
  const [likesN, setLikesN] = useState(likesNum);
  const loggedInUserContext = useContext(LoggedInUserContext);
  const currentLoggedInUser: User = loggedInUserContext.user!;
  const isFirstRun = useRef(true);

  const goToProfile = () => {
    navigate(`/profile/${userName}`, { state: { userName } });
  };

  const onLike = () => {
    console.log("onLike");
    setLiked(!liked);
  };

  useEffect(() => {
    const likePost = async () => {
      console.log(liked);

      if (liked) {
        PostsAPI.getInstance().likePost(id, currentLoggedInUser.name);
        setLikesN(likesN + 1);
      } else {
        PostsAPI.getInstance().unLikePost(id, currentLoggedInUser.name);
        setLikesN(likesN - 1);
      }
    };

    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    likePost();
  }, [liked]);

  return (
    <>
      <Card
        sx={{
          width: "100%",
          borderRadius: 0,
          borderTop: 0,
          borderRight: 0,
          borderLeft: 0,
          borderBottom: "2px solid rgba(0, 0, 0, 0.12)",
        }}
        variant="outlined"
      >
        <CardHeader
          avatar={<Avatar src={avatarSrc}></Avatar>}
          title={userName}
          onClick={goToProfile}
        />
        <CardMedia component="img" height="194" image={photoSrc} />
        <CardActions disableSpacing>
          <IconButton color="error" onClick={onLike}>
            {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          <Typography>{likesN}</Typography>
          <Typography sx={{ ml: "auto" }}>
            {moment(createdAt).fromNow()}
          </Typography>
        </CardActions>
      </Card>
    </>
  );
};

export default PostCard;
