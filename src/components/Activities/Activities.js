import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";
import "./Acitvities.css";

const Activities = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  return (
    <div>
      <h4>Select Today's Activity</h4>
      <div className="article-container">
        {datas.map((data) => (
          <Activity key={data.id} data={data}></Activity>
        ))}
      </div>
    </div>
  );
};

export default Activities;
