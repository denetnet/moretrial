import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <h2>Your Basket</h2>
        <br />
        <div className="cart-items-title">
          <p>Menu Item</p>
          <p>Name</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove Item</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="menu item" />
                  <p>{item.name}</p>
                  <p>₱ {item.price}.00</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₱ {item.price * cartItems[item._id]}.00</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    ✖️
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-add-more">
        <button onClick={() => navigate("/")}>ADD MORE ITEMS</button>
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Payment Details</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{59}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>Php {getTotalCartAmount() + 59}</b>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="PROMO CODE" />
              <button>APPLY</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
