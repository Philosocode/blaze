import React from "react";
import { FaBolt, FaExpandArrowsAlt, FaRulerCombined, FaPenNib } from "react-icons/fa";

const WhyIcons = () => {
  return (
    <div className="c-why__icons">
      <div className="c-why__icon-container">
        <FaExpandArrowsAlt className="c-why__icon" />
        <h5 className="c-why__icon-heading">Responsive</h5>
      </div>
      <div className="c-why__icon-container">
        <FaBolt className="c-why__icon" />
        <h5 className="c-why__icon-heading">Fast & Performant</h5>
      </div>
      <div className="c-why__icon-container">
        <FaRulerCombined className="c-why__icon" />
        <h5 className="c-why__icon-heading">Pixel-Perfect</h5>
      </div>
      <div className="c-why__icon-container">
        <FaPenNib className="c-why__icon" />
        <h5 className="c-why__icon-heading">Crafted With Care</h5>
      </div>
    </div>
  )
}

export default WhyIcons;