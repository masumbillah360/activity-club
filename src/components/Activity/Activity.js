import React from "react";
import './Activity.css'

const Activity = ({ data }) => {
    const {title, desc, time, working_time, img} = data;
  return (
    <div className="article">
      <img className="thumbnail" src={img} alt="img" />
      <h3>{title}</h3>
      <p>{desc ? desc.slice(0, 100) : "not found"}</p>
      <h4>Time : {time} Min</h4>
      <h5>Working Time : {working_time}</h5>
      <button className="add-btn">Add To List</button>
    </div>
  );
};

export default Activity;
