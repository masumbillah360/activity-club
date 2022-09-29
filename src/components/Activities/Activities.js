import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";

import "./Acitvities.css";

const Activities = ({times, setTimes}) => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    // data.json file on public folder 
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  return (
    <div>
      <h4>Select Today's Activity</h4>
      <div className="article-container">
        {datas.map((data) => (
          <Activity key={data.id} data={data} times={times} setTimes={setTimes}></Activity>
        ))}
      </div>
    </div>
  );
};

export default Activities;
