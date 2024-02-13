import React from "react";
import "./styles.scss";

export default function Footer() {
  return (
    <div id="aboutUs">
      <div className="follow-us-footer-section">
        <div className="follow-us">
          <img
            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-logo-light.png"
            className="food-munch-logo"
            alt="logo"
          />
          <h1 className="footer-section-mail">orderfood@foodmunch.com</h1>
          <p className="footer-section-address">
            123 Ayur Vigyan Nagar, New Delhi, India.
          </p>
          <h1 className="author">- Sai Khiran</h1>
        </div>
      </div>
    </div>
  );
}
