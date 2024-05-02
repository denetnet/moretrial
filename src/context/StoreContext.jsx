import { createContext, useEffect, useState } from "react"; // Import createContext, useEffect, useState from React
import { food_list } from "../assets/assets"; // Import food_list from assets

// Create context
export const StoreContext = createContext(null);

// StoreContextProvider component
const StoreContextProvider = (props) => {
  // State for cart items
  const [cartItems, setCartItems] = useState({});
  // Function to add item to cart
  const addToCart = (itemId) => {
    // If item not yet in cart, add it with default quantity 1
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      // If item already in cart, increase its quantity by 1
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  // Function to remove item from cart
  const removeFromCart = (itemId) => {
    // Decrease item's quantity by 1
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  // Function to calculate total cart amount
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    // Loop through items in cart
    for (const item in cartItems) {
      // If item quantity is greater than 0
      if (cartItems[item] > 0) {
        // Find item in food_list
        let itemInfo = food_list.find((product) => product._id === item);
        // Calculate total amount by multiplying item price with its quantity
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount; // Return total cart amount
  };

  // define context values
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  // Provide context value to children components
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider; // Export StoreContextProvider component
