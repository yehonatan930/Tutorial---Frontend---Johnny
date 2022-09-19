import * as React from "react";
import "./LowerNavbar.css";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import TableBarIcon from "@mui/icons-material/TableBar";

const LowerNavbar = () => {
  const [page, setPage] = React.useState("recents");

  const handleChange = (event: React.SyntheticEvent, newPage: string) => {
    setPage(newPage);
  };
  return (
    <>
      <BottomNavigation
        sx={{ width: 500 }}
        value={page}
        onChange={handleChange}
      >
        <BottomNavigationAction value="home" icon={<HomeIcon />} />
        <BottomNavigationAction
          value="newPost"
          icon={<AddPhotoAlternateIcon />}
        />
        <BottomNavigationAction value="myProfile" icon={<TableBarIcon />} />
      </BottomNavigation>
    </>
  );
};

export default LowerNavbar;
