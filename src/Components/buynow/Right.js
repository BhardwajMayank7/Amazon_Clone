import React, { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useHistory } from "react-router";

const Right = ({ iteam }) => {
  // console.log(iteam);
  const [val, setVal] = useState(false);

  const [price, setPrice] = useState(0);

  const history = useHistory("");

  useEffect(() => {
    totalAmount();
  }, [iteam]);

  const totalAmount = () => {
    let price = 0;
    iteam.map((item) => {
      price += item.price.cost;
    });
    setPrice(price);
  };

  const proceesby = () => {
    alert("Your Order is Confirmed");
    history.push("/");
  };

  return (
    <div className="right_buy">
      <img
        src="https://freevector-images.s3.amazonaws.com/uploads/vector/preview/36682/36682.png"
        alt="rightimg"
      />
      <div className="cost_right">
        <p>
          Your order is eligible for FREE Delivery. <br />
          <span style={{ color: "#565959" }}>
            {" "}
            Select this option at checkout. Details
          </span>
        </p>
        <h3>
          Subtotal ({iteam.length} items):{" "}
          <span style={{ fontWeight: "700" }}> ₹{price}.00</span>
        </h3>
        <button className="rightbuy_btn" onClick={proceesby}>
          Proceed to Buy
        </button>
        <div className="emi" onClick={() => setVal(!val)}>
          Emi available
          {!val ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>
        <span className={val ? "show" : "hide"}>
          {" "}
          Your order qualifies for EMI with valid credit cards (not available on
          purchase of Gold, Jewelry, Gift cards and Ecommerce balance top up).
          Learn more
        </span>
      </div>
    </div>
  );
};

export default Right;
