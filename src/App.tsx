import "./App.css";
import { Page } from "./utils/types";
import MainPage from "./pages/MainPage/MainPage";
import LowerNavbar from "./components/LowerNavbar/LowerNavbar";
import UpperNavbar from "./components/UpperNavbar/UpperNavbar";
import { Routes, Route, Navigate } from "react-router-dom";
import NewPost from "./pages/NewPost/NewPost";
import Profile from "./pages/Profile/Profile";
import NoPage from "./pages/NoPage/NoPage";
import { CurrentPageContext } from "./contexts/CurrentPageContext";

const App = () => {
  return (
    <div className="App">
      <UpperNavbar></UpperNavbar>
      <div className="pages-container">
        <Routes>
          <Route path="/home" element={<MainPage />} />
          <Route path="/newPost" element={<NewPost />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:userName" element={<Profile />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </div>
      <LowerNavbar></LowerNavbar>
    </div>
  );
};

export default App;
