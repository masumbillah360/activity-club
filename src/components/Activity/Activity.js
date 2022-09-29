import React from "react";
import './Activity.css'

const Activity = ({ data, times, setTimes }) => {
    const {title, desc, time, working_time, img} = data;


    const handleTime =(getTime)=>{
      setTimes([...times, parseInt(getTime) ])
    }
  return (
    <div className="article">
      <img className="thumbnail" src={img} alt="img" />
      <h3>{title}</h3>
      <p>{desc ? desc.slice(0, 120)+"..." : "not found"}</p>
      <h4>Time : {time} Hrs</h4>
      <h5>Working Time : {working_time}</h5>
      <button onClick={()=>handleTime(time)} className="add-btn">Add To List</button>
    </div>
  );
};

export default Activity;
