import { useEffect, useState } from 'react';
import "./App.css";
import Activities from "./components/Activities/Activities";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";

function App() {
  const [times, setTimes] = useState([]);
  const [totalTimes, setTotalTimes] = useState(0);
  useEffect(()=>{
    times.map(time=> setTotalTimes(totalTimes+time))
  },[times]);
  return (
    <div className="container">
      <div className='acitvity-container'>
        <Header></Header>
        <Activities times={times} setTimes={setTimes}></Activities>
      </div>
      <div className='profile-container'>
        <Profile totalTimes={totalTimes}></Profile>
      </div>
    </div>
  );
}

export default App;
