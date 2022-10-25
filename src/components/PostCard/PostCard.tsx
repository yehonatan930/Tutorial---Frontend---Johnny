import "./PostCard.css";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Typography from "@mui/material/Typography";
import PostDTO from "../../dto/PostDTO";
import moment from "moment";
import { useContext, useEffect, useRef, useState, AnimationEvent } from "react";
import PostsAPI from "../../api/PostsAPI";
import { LoggedInUserContext } from "../../contexts/LoggedInUserContext";
import { CurrentPageContext } from "../../contexts/CurrentPageContext";
import useDoubleClick from "../../hooks/useDoubleClick";

const PostCard = ({
  id,
  photoSrc,
  createdAt,
  avatarSrc,
  userName,
  likesNum,
  isLikedByCurrentUser,
}: PostDTO) => {
  const { setPage: setCurrentPage } = useContext(CurrentPageContext);
  const { user: currentLoggedInUser } = useContext(LoggedInUserContext);

  const [isLiked, setLiked] = useState<boolean>(isLikedByCurrentUser);
  const [likeCount, setLikeCount] = useState<number>(likesNum);
  const [animationRunning, setAnimationRunning] = useState<boolean>(false);

  const goToProfile = () => {
    setCurrentPage("profile", userName);
  };

  function handleLike() {
    if (currentLoggedInUser) {
      if (!isLiked) {
        PostsAPI.getInstance().likePost(id, currentLoggedInUser.name);
        setLikeCount(likeCount + 1);
      } else {
        PostsAPI.getInstance().unLikePost(id, currentLoggedInUser.name);
        setLikeCount(likeCount - 1);
      }

      setLiked(!isLiked);
    }
  }

  const handleDoubleTapLike = useDoubleClick(async () => {
    setAnimationRunning(true);
    !isLiked && handleLike();
  });

  return currentLoggedInUser ? (
    <Card
      sx={{
        width: "100%",
        borderRadius: 0,
        borderTop: 0,
        borderRight: 0,
        borderLeft: 0,
        borderBottom: "2px solid rgba(0, 0, 0, 0.12)",
        position: "relative",
      }}
      variant="outlined"
    >
      <CardHeader
        avatar={<Avatar src={avatarSrc}></Avatar>}
        title={userName}
        onClick={goToProfile}
      />
      <FavoriteIcon
        onAnimationEnd={() => setAnimationRunning(false)}
        className={
          "heart-icon-design" + (animationRunning ? " like-heart-effect" : "")
        }
      />
      <CardMedia
        component="img"
        height="200"
        image={photoSrc}
        onClick={handleDoubleTapLike}
      />
      <CardActions disableSpacing>
        <IconButton
          className={isLiked ? "like-button" : ""}
          onClick={() => handleLike()}
        >
          {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
        <Typography sx={{ color: isLiked ? "#e57373" : undefined }}>
          {likeCount}
        </Typography>

        <Typography sx={{ ml: "auto" }}>
          {moment(createdAt).fromNow()}
        </Typography>
      </CardActions>
    </Card>
  ) : (
    <></>
  );
};

export default PostCard;
