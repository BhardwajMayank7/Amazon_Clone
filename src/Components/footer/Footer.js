import React from "react";
import "../footer/footr.css";

const Footer = () => {
  const year = new Date().getFullYear();
  console.log(year);

  return (
    <footer>
      <div className="footer_container">
        <div className="footr_details_one">
          <h3>Get to Know US</h3>
          <p>About us</p>
          <p>Careers</p>
          <p>Press Releases</p>
          <p>Ecommerce Cares</p>
        </div>
        <div className="footr_details_one">
          <h3>Connect with Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="footr_details_one forres">
          <h3>Make Money with Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="footr_details_one forres">
          <h3>Make Money with Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
      </div>
      <div className="lastdetails">
        <img
          src="https://freevector-images.s3.amazonaws.com/uploads/vector/preview/36682/36682.png"
          alt="logo"
        />
        <p>
          Conditions of Use & Sale &nbsp; &nbsp;&nbsp; Privacy Notice &nbsp;
          &nbsp;&nbsp; Interest-Based Ads &nbsp; &nbsp;&nbsp; © 1996-{year},
          Ecommerce.com, Inc. or its affiliates
        </p>
      </div>
    </footer>
  );
};

export default Footer;
