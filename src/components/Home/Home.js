import React, { useEffect, useState } from 'react';
import Activites from '../Activities/Activites';
import './Home.css'

const Home = () => {
    const [info, setInfo] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setInfo(data))
    },[])
    // console.log(info);
    return (
        <div>
            <div>
                <h1>Daily Activities</h1>
                <h4>Selecte Today's Exercice</h4>
            </div>
            <div className="article">
                {info.map(i=><Activites key={i.id} info = {i}></Activites>)}
            </div>
        </div>
    );
};

export default Home;