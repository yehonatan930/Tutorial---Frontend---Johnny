import * as React from "react";
import "./LowerNavbar.css";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import TableBarIcon from "@mui/icons-material/TableBar";
import { Link, useNavigate } from "react-router-dom";

const LowerNavbar = () => {
  const [page, setPage] = React.useState("");

  const navigate = useNavigate();

  React.useEffect(() => {
    navigate(`/${page}`);
  }, [page]);

  const handleChange = (event: React.SyntheticEvent, newPage: string) => {
    setPage(newPage);
  };
  return (
    <>
      <BottomNavigation
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        value={page}
        onChange={handleChange}
      >
        <BottomNavigationAction
          value=""
          icon={<HomeIcon />}
        ></BottomNavigationAction>

        <BottomNavigationAction
          value="newPost"
          icon={<AddPhotoAlternateIcon />}
        >
        </BottomNavigationAction>
        <BottomNavigationAction
          value="profile"
          icon={<TableBarIcon />}
        ></BottomNavigationAction>
      </BottomNavigation>
    </>
  );
};

export default LowerNavbar;
