import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { defaultTheme } from "./utils/theme";
import { useEffect, useState } from "react";
import { Page } from "./utils/types";
import MainPage from "./pages/MainPage/MainPage";
import LowerNavbar from "./components/LowerNavbar/LowerNavbar";
import UpperNavbar from "./components/UpperNavbar/UpperNavbar";
import { Routes, Route, useNavigate } from "react-router-dom";
import NewPost from "./pages/NewPost/NewPost";
import Profile from "./pages/Profile/Profile";
import NoPage from "./pages/NoPage/NoPage";

const App = () => {
  const [currentPage, setCurrentPage] = useState<Page>("");

  const navigate = useNavigate();
  useEffect(() => {
    navigate(`/${currentPage}`);
  }, [currentPage]);

  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <UpperNavbar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        ></UpperNavbar>
        <Routes>
          <Route index element={<MainPage />} />
          <Route
            path="/newPost"
            element={<NewPost setCurrentPage={setCurrentPage} />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        {/* <UserProvider>
          <MainPage />
        </UserProvider> */}
        <LowerNavbar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        ></LowerNavbar>
      </ThemeProvider>
    </div>
  );
};

export default App;
