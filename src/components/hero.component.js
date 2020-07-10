import React from "react";

const Hero = () => {
  return (
    <section className="o-grid c-hero__section">
      <div className="o-grid__item--wide">
        <div className="c-hero__content">
          <h1 className="c-hero__title">Tam Le</h1>
          <h3 className="c-hero__subtitle">Developer, Designer, Teacher</h3>
          <p className="c-hero__description">
            You have an idea. A vision for a product. I can help you build it.
            <br />
            Let's work together and make it a reality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;