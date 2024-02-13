import React, { Fragment } from "react";

import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home-banner-bg">
        <div className="home-banner">
          <h1 className="home-banner-heading">Get Delicious Food Anytime</h1>
          <p className="home-banner-description">Eat smart & healthy</p>
          <div>
            <Link to="/login">
              <button className="btn home-login-btn">Login</button>
            </Link>
            <Link to="/signup">
              <button className="btn home-signup-btn">Signup</button>
            </Link>
          </div>
          <Link to="/homeMenuSection">
            <button className="home-order-btn">Order Now</button>
          </Link>
        </div>
      </div>

      {/* why choose us section */}

      <div id="whyChooseUs">
        <div className="why-us-section">
          <h1 className="wcu-section-heading">Why Choose Us?</h1>
          <p className="wcu-section-description">
            We use both original recipes and classic versions of famous food
            items.
          </p>
          <div className="choose-us-service-cards">
            <div className="wcu-card">
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-serve.png"
                className="wcu-card-image"
                alt="Food-Service"
              />
              <h1 className="wcu-card-heading mt-3">Food Service</h1>
              <p className="wcu-card-description">
                Experience fine dining at the comfort of your home. All our
                orders are carefully packed and arranged to give you the nothing
                less than perfect.
              </p>
            </div>

            <div className="wcu-card">
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/fruits-img.png"
                className="wcu-card-image"
                alt="Fresh Food"
              />
              <h1 className="wcu-card-heading mt-3">Fresh Food</h1>
              <p className="wcu-card-description">
                Experience fine dining at the comfort of your home. All our
                orders are carefully packed and arranged to give you the nothing
                less than perfect.
              </p>
            </div>

            <div className="wcu-card">
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/offers-img.png"
                className="wcu-card-image"
                alt="Best Offers"
              />
              <h1 className="wcu-card-heading mt-3">Best Offers</h1>
              <p className="wcu-card-description">
                Food Coupons & Offers upto
                <span className="offers">50% OFF</span>
                and Exclusive Promo Codes on All Online Food Orders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
