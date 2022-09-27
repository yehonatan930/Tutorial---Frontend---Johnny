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
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
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
