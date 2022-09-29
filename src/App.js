import "./App.css";
import Activities from "./components/Activities/Activities";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="container">
      <div>
        <Header></Header>
        <Activities></Activities>
      </div>
      <div>
        <Profile></Profile>
      </div>
    </div>
  );
}

export default App;
