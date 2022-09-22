import React from "react";
import "./UpperNavbar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { page } from "../../utils/types";

interface UpperNavbarProps {
  page: page;
}

const UpperNavbar = ({ page }: UpperNavbarProps) => {
  return (
    <>
      <Box sx={{}}>
        <AppBar position="static">
          <Toolbar
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <IconButton
              size="large"
              edge="start"
              aria-label="exit"
              sx={{ position: "absolute", left: 12 }}
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{}}>
              {page === ""
                ? "Instagram"
                : page === "newPost"
                ? "Create New Post"
                : "My Profile"}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default UpperNavbar;
