import React from "react";
// import ParticlesBackground from "./particles-background.component";

const Hero = () => {
  return (
    <section className="o-grid c-hero__section" id="hero">
      <div className="o-grid__item--full">
        {/* <ParticlesBackground /> */}
      </div>
      <div className="o-grid__item--center c-hero__text">
        <h1 className="c-hero__title">Tam Le</h1>
        <h2 className="c-hero__subtitle">Developer, Designer, Teacher</h2>
        <p className="c-body-text c-hero__description">{
          "You have an idea. A vision for a product. I can help you build it.\nLet's work together and make it a reality."
        }</p>
      </div>
      <div className="o-grid__item--full">
        <svg className="c-hero__waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#121212" fillOpacity="1" d="M0,160L48,144C96,128,192,96,288,80C384,64,480,64,576,85.3C672,107,768,149,864,149.3C960,149,1056,107,1152,106.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;