import React from "react";
import "./styles.scss";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <a className="navbar-brand" href="/food-crunch">
          <img
            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-img.png"
            className="food-munch-logo"
            alt="logo"
          />
        </a>

        <div className="navbar-nav">
          <a className="nav-link active" href="#whyChooseUsSection">
            Why Us?
          </a>
          <a className="nav-link active" href="#menuSection">
            Menu
          </a>
          <a className="nav-link active" href="#payments">
            Delivery & Payments
          </a>
          <a className="nav-link active" href="#aboutUs">
            Follow Us
          </a>
        </div>
      </div>
    </nav>
  );
}
