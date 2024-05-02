import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../ExploreMenu/FoodItem/FoodItem"; // Import FoodItem component

// Functional component for displaying food items
const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Tasty foods made with love</h2>
      <div className="food-display-list">
        {/* Mapping through the food list data */}
        {food_list.map((item, index) => {
          // Render FoodItem component if category is All or if a specific category matches
          if (category === "All" || category === item.category) {
            return (
              // Render FoodItem component with selected food item details
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay; // Exporting the FoodDisplay component
