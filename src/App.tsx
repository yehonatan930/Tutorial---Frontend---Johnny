import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { MainPage } from "./components/pages/MainPage/MainPage";
import { UserProvider } from "./contexts/UserContext";
import { defaultTheme } from "./utils/theme";
import LowerNavbar from "./components/LowerNavbar/LowerNavbar";
import UpperNavbar from "./components/UpperNavbar/UpperNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewPost from "./components/pages/NewPost/NewPost";
import Profile from "./components/pages/Profile/Profile";
import NoPage from "./components/pages/NoPage/NoPage";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <UpperNavbar></UpperNavbar>
          <Routes>
            <Route index element={<MainPage />} />
            <Route path="/newPost" element={<NewPost />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/*" element={<NoPage />} />
          </Routes>
          {/* <UserProvider>
          <MainPage />
        </UserProvider> */}
          <LowerNavbar></LowerNavbar>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
