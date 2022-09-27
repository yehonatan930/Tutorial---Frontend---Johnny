import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { MainPage } from "./pages/MainPage/MainPage";
import { defaultTheme } from "./utils/theme";
import LowerNavbar from "./components/LowerNavbar/LowerNavbar";
import UpperNavbar from "./components/UpperNavbar/UpperNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewPost from "./pages/NewPost/NewPost";
import Profile from "./pages/Profile/Profile";
import NoPage from "./pages/NoPage/NoPage";
import { useState } from "react";
import { Page } from "./utils/types";

const App = () => {
  const [currentPage, setCurrentPage] = useState<Page>("");

  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <UpperNavbar currentPage={currentPage}></UpperNavbar>
          <Routes>
            <Route index element={<MainPage />} />
            <Route path="/newPost" element={<NewPost />} />
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
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
