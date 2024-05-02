import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter for routing
import StoreContextProvider from "./context/StoreContext.jsx";

// Renderthe application to the DOM
ReactDOM.createRoot(document.getElementById("root")).render(
  // Wrap the entire application with BrowserRouter
  <BrowserRouter>
    {/* Provide StoreContext to the entire application */}
    <StoreContextProvider>
      {/* Render the main App component */}
      <App />
    </StoreContextProvider>
  </BrowserRouter>
);
