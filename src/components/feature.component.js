import React from "react";

import FeatureProject from "./feature-project.component";
import darronTaImage from "../images/darron-ta.jpg";
import chinguImage from "../images/ka-chingu.jpg";
import threeTakesOrLessImage from "../images/3tl.jpg";
import politikImage from "../images/politik.jpg";
import zephyrImage from "../images/zephyr.jpg";

const Feature = () => (
  <section className="o-grid c-feature__section" id="featured">
    <div className="o-grid__item--wide c-feature__content">
      <h2>Featured</h2>

      <div className="c-feature__projects">
        <FeatureProject
          description="Website for up-and-coming stunt team based in Edmonton."
          imageSrc={threeTakesOrLessImage}
          url="https://3takesorless.com"
          technologies={["React", "Gatsby"]}
          title="3 Takes or Less"
        />

        <FeatureProject
          description="Basic full-stack web app for tracking income and expenses. Built with other team members for chingu.io voyage 8."
          imageSrc={chinguImage}
          url="https://ka-chingu.herokuapp.com/dashboard"
          technologies={["React", "Redux", "Express", "PostgreSQL"]}
          title="KA-Chingu"
        />

        <FeatureProject
          description="Website for martial artist and stunt actor."
          imageSrc={darronTaImage}
          url="https://darronta.com"
          technologies={["React", "Gatsby"]}
          title="Darron Ta: Stunt Portfolio"
        />

        <FeatureProject
          description="Website for Politik™, a social impact agency."
          imageSrc={politikImage}
          url="https://politik.ca"
          technologies={["WordPress"]}
          title="Politik™"
        />

        <FeatureProject
          description="First iteration of my personal website."
          imageSrc={zephyrImage}
          url="https://tamxle.com"
          technologies={["HTML", "SCSS", "JavaScript"]}
          title="Zephyr"
        />
      </div>
    </div> 
  </section>
);

export default Feature;