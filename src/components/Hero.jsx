import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hero container">
        <div className="left">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="hero-btn">
            <button className="login-btn">Shop Now</button>
            <button className="category-btn">Category</button>
          </div>
          <div className="shopping">
            <p>Also available on</p>
            <div className="shopping-websites">
              <img src="/images/flipkart.png" alt="flipkart" />
              <img src="/images/amazon.png" alt="amazon" />
            </div>
          </div>
        </div>
        <div className="right">
          <img src="/images/shoe_image.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
