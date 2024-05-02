import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom"; // Importing Link component from React Router

// Get current year for footer copyright year
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        {/* Left content */}
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />
          <a href="https://maps.app.goo.gl/asyF7niuMCksKiEC6">
            <p>📍 P1 #25 Brgy. San Francisco, Nagcarlan, Philippines</p>
          </a>
          {/* Social media icons */}
          <div className="footer-social-icons">
            <a href="https://www.facebook.com/sweetconfectionspastryshop">
              <img src={assets.facebook_icon} alt="facebook icon" />
            </a>
            <a href="https://www.instagram.com/sweetconfectionspastryshop/">
              <img src={assets.insta_icon} alt="instagram icon" />
            </a>
            <a href="https://twitter.com/SCPastries">
              <img src={assets.twitter_icon} alt="twitter icon" />
            </a>
          </div>
        </div>
        {/* Center content */}
        <div className="footer-content-center">
          <h2>OUR COMPANY</h2>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/aboutus">
              <li>About Us</li>
            </Link>
            <Link to="/printedmenu">
              <li>Printed Menu</li>
            </Link>
            <Link to="/privacypolicy">
              <li>Privacy policy</li>
            </Link>
          </ul>
        </div>
        {/* Right content */}
        <div className="footer-content-right">
          <h2>CONTACT US</h2>
          <ul>
            <li>📲 0910 992 7857</li>
            <li>💌 sweetconfectionspastries@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      {/* Copyright notice */}
      <p className="footer-copyright">
        Copyright {currentYear} © SweetConfections, Inc. - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer; // Export Footer component
