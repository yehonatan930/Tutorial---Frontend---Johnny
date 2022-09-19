import React from "react";
import "./UpperNavbar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function UpperNavbar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
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
              Instagram
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
