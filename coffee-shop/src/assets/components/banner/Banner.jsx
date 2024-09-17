import { useState } from "react";
import "./banner.css";
import cupImage from "./banner_tea_cup.png";
function Banner() {
  return (
    <div className="main-container">
      <div className="inner-container-narrow banner_flex_main">
        <div className="banner_felx_img">
          <div className="banner_image_frame">
            <span></span>
          </div>
          <picture>
            <source src={cupImage} srcSet={cupImage} type="image/.png" />
            <img src={cupImage} />
          </picture>
        </div>
        <div className="banner_flex_content">
          <h2 className="banner_headline section_heading">
            Fuel Your Day with Our Perfect Brew
          </h2>
          <p className="banner_text para_text">
            Start your day with the energy and warmth of a perfectly crafted cup
            of coffee. Our expertly roasted beans are hand-selected from the
            finest sources, ensuring that every sip is smooth, rich, and full of
            flavor. Whether you're gearing up for a busy day or need a midday
            pick-me-up, our coffee is brewed to fuel your passion and keep you
            going. Come in for a cup and experience the perfect blend that turns
            ordinary moments into extraordinary ones.
          </p>
          <a role="link" className="btn banner_order_btn" href="#">
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
