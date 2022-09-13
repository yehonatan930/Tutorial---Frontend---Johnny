import "./App.css";
import { MainPage } from "./components/pages/MainPage/MainPage";
import UpperNavbar from "./components/UpperNavbar/UpperNavbar";
import { UserProvider } from "./utils/UserContext";

function App() {
  return (
    <div className="App">
      <UpperNavbar></UpperNavbar>
      <UserProvider>
        <MainPage />
      </UserProvider>
    </div>
  );
}

export default App;
