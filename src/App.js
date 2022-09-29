import { useEffect, useState } from "react";
import Activities from "./components/Activities/Activities";
import Blog from "./components/Blog/Blog";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";

import "./App.css";

function App() {
  const [times, setTimes] = useState([]);
  const [totalTimes, setTotalTimes] = useState(0);
  useEffect(() => {
    times.map((time) => setTotalTimes(totalTimes + time));
  }, [times]);
  return (
    <div>
      <div className="container">
        <div className="acitvity-container">
          <Header></Header>
          <Activities times={times} setTimes={setTimes}></Activities>
        </div>
        <div className="profile-container">
          <Profile totalTimes={totalTimes}></Profile>
        </div>
      </div>
      <Blog></Blog>
    </div>
  );
}

export default App;
