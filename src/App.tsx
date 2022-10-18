import "./App.css";
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
          <Route path="/profile/current" element={<Profile />} />
          <Route path="/profile/:userName" element={<Profile />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </div>
      <LowerNavbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></LowerNavbar>
    </div>
  );
};

export default App;
