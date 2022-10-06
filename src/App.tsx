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
import { LoggedInUserProvider } from "./contexts/LoggedInUserContext";

const App = () => {
  const [currentPage, setCurrentPage] = useState<Page>("");

  const navigate = useNavigate();
  useEffect(() => {
    navigate(`/${currentPage}`);
  }, [currentPage]);

  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <LoggedInUserProvider>
          <UpperNavbar
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          ></UpperNavbar>
          <div className="pages-container">
            <Routes>
              <Route index element={<MainPage />} />
              <Route
                path="/newPost"
                element={<NewPost setCurrentPage={setCurrentPage} />}
              />
              <Route path="/profile" element={<Profile />} />
              <Route path="/*" element={<NoPage />} />
            </Routes>
          </div>
          <LowerNavbar
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          ></LowerNavbar>
        </LoggedInUserProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
