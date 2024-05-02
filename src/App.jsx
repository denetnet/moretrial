import React, { useState } from "react";
// import all necessary components
import Navbar from "./components/Navbar/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import ScrollToTop from "./components/ScrollToTop";
import AboutUs from "./pages/AboutUs/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import PrintedMenu from "./pages/PrintedMenu/PrintedMenu";

const App = () => {
  // State to manage visibility of login popup
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {/* Conditional rendering of LoginPopup component */}
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      {/* Render Navbar component outside of div "app" to set width style of 100% */}
      <Navbar setShowLogin={setShowLogin} />
      {/* Main container div */}
      <div className="app">
        {/* Scroll back to top when navigating through web pages */}
        <ScrollToTop />
        {/* Routing setup */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/printedmenu" element={<PrintedMenu />} />
          {/* Fallback route to redirect to Home page if no match found */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      {/* Render Footer component */}
      <Footer />
    </>
  );
};

export default App;
