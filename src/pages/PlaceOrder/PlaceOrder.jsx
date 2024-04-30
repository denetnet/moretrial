import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>
        <input
          type="email"
          id="email"
          size="40"
          placeholder="Email address"
          required
        />
        <input type="text" placeholder="Street" required />
        <div className="multi-fields">
          <input type="text" placeholder="Barangay" required />
          <input type="text" placeholder="Municipality" required />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Province" required />
          <input type="text" placeholder="Zip Code" />
        </div>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Telephone or Mobile Number"
          required
        />
      </div>
      <div className="place-order-right">
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
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
