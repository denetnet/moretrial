import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header"; // Import Header component
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu"; // Import ExploreMenu component
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay"; // Import FoodDisplay component

const Home = () => {
  const [category, setCategory] = useState("All"); // State for selected category
  return (
    <div>
      <Header /> {/* Render Header component */}
      <ExploreMenu category={category} setCategory={setCategory} />{" "}
      {/* Render ExploreMenu component */}
      <FoodDisplay category={category} /> {/* Render FoodDisplay component */}
    </div>
  );
};

export default Home;
