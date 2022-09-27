import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import { useState } from "react";
import "./NewPost.css";
import { Page } from "../../utils/types";

interface NewPostProps {
  setCurrentPage: (page: Page) => void;
}

const NewPost = ({ setCurrentPage }: NewPostProps) => {
  const [imageURL, setImageURL] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageURL(event.target.value);
  };

  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const createPost = async () => {
    setLoading(true);

    await delay(2000);

    setLoading(false);

    setCurrentPage("profile");
  };

  return (
    <Box
      component="form"
      sx={{
        m: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl sx={{ mb: 3 }} fullWidth variant="standard">
        <InputLabel htmlFor="imageURLInput">Photo url</InputLabel>
        <Input
          fullWidth
          id="imageURLInput"
          value={imageURL}
          onChange={handleChange}
          aria-describedby="imageURLInput-text"
        />
        <FormHelperText id="imageURLInput-text">
          create a new post with the specified URL
        </FormHelperText>
      </FormControl>
      <img
        className="image-preview"
        src={`${imageURL}`}
        srcSet={`${imageURL}`}
        loading="lazy"
      />
      <LoadingButton
        loading={loading}
        variant="contained"
        disableElevation
        disabled={imageURL === ""}
        onClick={createPost}
      >
        Create
      </LoadingButton>
    </Box>
  );
};

export default NewPost;
