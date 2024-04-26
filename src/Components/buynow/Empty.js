import React from "react";
import { NavLink } from "react-router-dom";
import "./buynow.css";

const Empty = () => {
  return (
    <div className="buynow_section">
      <div className="buynow_container">
        <div className="empty_buy" style={{ padding: "40px 40px" }}>
          <img
            src="https://freevector-images.s3.amazonaws.com/uploads/vector/preview/36682/36682.png"
            alt="cart img"
          />
          <div className="emptydata">
            <h1>Your Ecommerce Basket is empty</h1>
            <p>See recommendations</p>
          </div>
          <NavLink className="empty_btn" to="/">
            Add Your Iteams
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Empty;
