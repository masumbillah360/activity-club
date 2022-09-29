import React from "react";
import { FaDumbbell } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <span className="dumb-icon"><FaDumbbell></FaDumbbell></span>
      <h1>My Daily Activities</h1>
    </div>
  );
};

export default Header;
