import React from "react";
import { FaBolt, FaExpandArrowsAlt, FaRulerCombined, FaPenNib } from "react-icons/fa";

const WhyIcons = () => {
  const iconData = [
    { icon: FaExpandArrowsAlt, text: "Responsive" },
    { icon: FaBolt, text: "Performant" },
    { icon: FaRulerCombined, text: "Pixel-Perfect" },
    { icon: FaPenNib, text: "Crafted With Care" },
  ];

  return (
    <div className="c-why__icons">
      {
        iconData.map((data, idx) => (
        <div key={data.text} className="c-why__icon-container" data-aos="fade-up" data-aos-delay={idx * 200} data-aos-offset={300} data-aos-duration={500}>
          <data.icon className="c-why__icon" />
          <h5 className="c-heading c-heading--condensed c-heading--light-red">{data.text}</h5>
        </div>
        ))
      }
    </div>
  )
}

export default WhyIcons;