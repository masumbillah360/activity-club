import React from "react";
import { GiStrong } from "react-icons/gi";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      {/* header icon  */}
      <div className="dumb-icon"><GiStrong></GiStrong></div>
      <h1 className="header-title">My Daily Activities</h1>
    </div>
  );
};

export default Header;
