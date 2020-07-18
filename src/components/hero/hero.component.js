import React, { useContext } from "react";
import { Waypoint } from "react-waypoint";

import { HeaderContext } from "../../contexts/header.context";
// import ParticlesBackground from "./particles-background.component";
import Waves from "../../icons/waves.svg";

const Hero = () => {
  const { setDarkHeader, setTransparentHeader } = useContext(HeaderContext);

  return (
    <>
      <section className="o-grid c-hero__section" id="hero">
        <div className="o-grid__item--full c-hero__particles" style={{ animationDelay: "2200ms" }}>
          {/* <ParticlesBackground /> */}
        </div>
        <div className="o-grid__item--center c-hero__text">
          <h1 className="c-hero__title" style={{ animationDelay: "1350ms" }}>Tam Le</h1>
          <h2 className="c-hero__subtitle" style={{ animationDelay: "1500ms" }}>Developer, Designer, Teacher</h2>
          <p className="c-body-text c-hero__description" style={{ animationDelay: "1650ms" }}>{
            "You have an idea. A vision for a product. I can help you build it.\nLet's work together and make it a reality."
          }</p>
          <Waypoint
            onEnter={setTransparentHeader}
            onLeave={setDarkHeader}
          />
        </div>
        <div className="o-grid__item--full">
          <Waves className="c-hero__waves" style={{ animationDelay: "1800ms" }} />
          <Waves className="c-hero__waves" style={{ animationDelay: "1800ms" }} />
        </div>
      </section>
    </>
  );
};

export default Hero;