import "./App.css";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="container">
      <div className="home">
        <Home></Home>
      </div>

      <div className="profile">
        <Profile></Profile>
      </div>
    </div>
  );
}

export default App;
