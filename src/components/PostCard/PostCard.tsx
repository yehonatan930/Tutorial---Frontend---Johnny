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

const PostCard = ({
  photoSrc,
  createdAt,
  avatarSrc,
  userName,
  likesNum,
  isLikedByCurrentUser,
}: PostDTO) => {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate(`/profile/${userName}`, { state: { userName } });
  };

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
          <IconButton color="error">
            {isLikedByCurrentUser ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          <Typography>{likesNum}</Typography>
          <Typography sx={{ ml: "auto" }}>
            {moment(createdAt).fromNow()}
          </Typography>
        </CardActions>
      </Card>
      {/* <hr></hr> */}
    </>
  );
};

export default PostCard;
