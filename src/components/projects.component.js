import React from "react";

import ProjectBox from "./project-box.component";
import lilacImage from "../images/lilac.jpg";
import philosocodeImage from "../images/philosocode.jpg";

const Projects = () => {
  return (
    <section className="o-grid o-section" id="projects">
      <div className="o-grid__item--wide">
        <h2 className="c-heading c-heading--section c-heading--centered">Other Projects</h2>

        <div className="c-project__grid">
          <ProjectBox
            description="Programming blog where I post computer science & web development tutorials."
            imageSrc={philosocodeImage}
            title="Philosocode"
            url="https://philosocode.com"
          />
          <ProjectBox
            description="Simple landing page and writing app. Built for a 48 hour interview take-home project."
            imageSrc={lilacImage}
            title="Lilac"
            url="https://tamxle.com/lilac"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;