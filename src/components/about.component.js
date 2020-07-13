import React from "react";

import AboutCardLeft from "./about-card-left.component";
import AboutCardRight from "./about-card-right.component";

const About = () => {
  return (
    <section className="o-grid o-section o-section--black" id="about">
      <div className="o-grid__item--wide">
        <div className="c-about__cards">
          <AboutCardLeft />
          <AboutCardRight />
        </div>
      </div>
    </section>
  );
};

export default About;