import React from "react";
import { assets } from "../../assets/assets";
import "./PrintedMenu.css";

const PrintedMenu = () => {
  return (
    <div className="printed-menu">
      <h1>Printed Menu</h1>
      <br />
      <img src={assets.menu1} alt="menu 1" />
      <img src={assets.menu2} alt="menu 2" />
      <img src={assets.menu3} alt="menu 3" />
    </div>
  );
};

export default PrintedMenu;
