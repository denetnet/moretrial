import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets"; //To import images from assets

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login"); // State for current state of login popup

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2> {/* Display current state */}
          <img
            onClick={() => setShowLogin(false)} // Close button onClick handler
            src={assets.cross_icon}
            alt="cross icon"
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? ( // Conditional rendering for name input
            <></> // Empty fragment if state is "Login"
          ) : (
            <input type="text" placeholder="Name" required />
          )}

          <input type="email" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use and privacy policy</p>
        </div>
        {currState === "Login" ? ( // Conditional rendering for login/signup link
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup; // Export LoginPopup component
