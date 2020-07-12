import React from "react";
import CraftedWithCareIcon from "../icons/crafted-with-care.svg";
import PixelPerfectIcon from "../icons/pixel-perfect.svg";
import ResponsiveIcon from "../icons/responsive.svg";
import PerformantIcon from "../icons/performant.svg";

const Why = () => {
  return (
    <section className="o-grid c-why__section">
      <div className="o-grid__item--center c-why__content">
        <div className="c-why__icons">
          <div className="c-why__icon-container">
            <ResponsiveIcon className="c-why__icon" />
            <h5 className="c-why__icon-heading">Responsive</h5>
          </div>
          <div className="c-why__icon-container">
            <PerformantIcon className="c-why__icon" />
            <h5 className="c-why__icon-heading">Fast & Performant</h5>
          </div>
          <div className="c-why__icon-container">
            <PixelPerfectIcon className="c-why__icon" />
            <h5 className="c-why__icon-heading">Pixel-Perfect</h5>
          </div>
          <div className="c-why__icon-container">
            <CraftedWithCareIcon className="c-why__icon" />
            <h5 className="c-why__icon-heading">Crafted With Care</h5>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Why;