import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { MainPage } from "./components/pages/MainPage/MainPage";
import { UserProvider } from "./utils/UserContext";
import { defaultTheme } from "./utils/theme";
import LowerNavbar from "./components/LowerNavbar/LowerNavbar";
import UpperNavbar from "./components/UpperNavbar/UpperNavbar";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <UpperNavbar></UpperNavbar>
        <UserProvider>
          <MainPage />
        </UserProvider>
        <LowerNavbar></LowerNavbar>
      </ThemeProvider>
    </div>
  );
}

export default App;
