import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { red } from "@mui/material/colors";
import Post from "../../models/Post";
import Typography from "@mui/material/Typography";

export interface PostCardProps {
  photoSrc: string;
  createdAt: Date;
  avaterSrc: string;
  userName: string;
  likesNum: number;
  isLikedByCurrentUser: boolean;
}

const PostCard = ({
  photoSrc,
  createdAt,
  avaterSrc,
  userName,
  likesNum,
  isLikedByCurrentUser,
}: PostCardProps) => {
  return (
    <>
      <Card
        sx={{
          borderRadius: 0,
          borderTop: 0,
          borderRight: 0,
          borderLeft: 0,
          borderBottom: "2px solid rgba(0, 0, 0, 0.12)",
        }}
        variant="outlined"
      >
        <CardHeader
          avatar={<Avatar src={avaterSrc}></Avatar>}
          title={userName}
        />
        <CardMedia component="img" height="194" image={photoSrc} />
        <CardActions disableSpacing>
          <IconButton color="error">
            {isLikedByCurrentUser ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          <Typography>{likesNum}</Typography>
          <Typography sx={{ ml: "auto" }}>
            {createdAt.toLocaleString()}
          </Typography>
        </CardActions>
      </Card>
      {/* <hr></hr> */}
    </>
  );
};

export default PostCard;
