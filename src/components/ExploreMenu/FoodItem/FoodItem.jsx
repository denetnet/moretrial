import React, { useContext } from "react";
// import styles, asset paths for images, and storecontext for managing state
import "./FoodItem.css";
import { assets } from "../../../assets/assets";
import { StoreContext } from "../../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    // food item container
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="food-item-image" />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)} //Event handler for adding item to cart
            src={assets.add_icon_white}
            alt="white-icon"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)} // Event handler for removing item from cart
              src={assets.remove_icon_red}
              alt="red-icon"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)} // Event handler for adding more of the item to cart
              src={assets.add_icon_green}
              alt="green-icon"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <p className="food-item-name">{name}</p>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">Php {price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
