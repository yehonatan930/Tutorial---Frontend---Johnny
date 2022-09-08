import "./App.css";
import { MainPage } from "./components/pages/MainPage/MainPage";
import { UserProvider } from "./utils/UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <MainPage />
      </UserProvider>
    </div>
  );
}

export default App;
