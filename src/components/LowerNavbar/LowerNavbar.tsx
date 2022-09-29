import * as React from "react";
import "./LowerNavbar.css";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import TableBarIcon from "@mui/icons-material/TableBar";
import { Page } from "../../utils/types";

interface LowerNavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const LowerNavbar = ({ currentPage, setCurrentPage }: LowerNavbarProps) => {
  const handleChange = (event: React.SyntheticEvent, newPage: Page) => {
    setCurrentPage(newPage);
  };
  return (
    <>
      <BottomNavigation
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: "56px",
          boxShadow:
            "rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px",
        }}
        value={currentPage}
        onChange={handleChange}
      >
        <BottomNavigationAction
          value=""
          icon={<HomeIcon />}
        ></BottomNavigationAction>

        <BottomNavigationAction
          value="newPost"
          icon={<AddPhotoAlternateIcon />}
        ></BottomNavigationAction>
        <BottomNavigationAction
          value="profile"
          icon={<TableBarIcon />}
        ></BottomNavigationAction>
      </BottomNavigation>
    </>
  );
};

export default LowerNavbar;
