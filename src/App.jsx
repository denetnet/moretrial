import React, { useState } from "react";
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
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <Navbar setShowLogin={setShowLogin} />
      <div className="app">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/printedmenu" element={<PrintedMenu />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
