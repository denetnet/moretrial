import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom"; // Import Link component from React Router
import { StoreContext } from "../../context/StoreContext";

// Navbar component
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu"); // State for current active menu

  const { getTotalCartAmount } = useContext(StoreContext); // Access getTotalCartAmount function from StoreContext

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onMouseOver={() => setMenu("home")} // Set menu state to "home" on mouseover
          className={menu === "home" ? "active" : ""} // Apply active class if menu state is "home"
        >
          HOME
        </Link>
        <a
          href="#explore-menu"
          onMouseOver={() => setMenu("menu")} // Set menu state to "menu" on mouseover
          className={menu === "menu" ? "active" : ""} // Apply active class if menu state is "menu"
        >
          MENU
        </a>
        <a
          href="#footer"
          onMouseOver={() => setMenu("contact-us")} // Set menu state to "contact-us" on mouseover
          className={menu === "contact-us" ? "active" : ""} // Apply active class if menu state is "contact-us"
        >
          CONTACT US
        </a>
      </ul>
      <div className="navbar-right">
        {" "}
        {/* Navbar right side */}
        {/* <img src={assets.search_icon} alt="search icon" /> */}
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="basket icon" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar; // Export Navbar component
