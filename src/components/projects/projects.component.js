import React from "react";

import ProjectBox from "./project-box.component";
import { useStaticQuery, graphql } from "gatsby";
import { aosHeadingAttributes } from "../../shared/data.shared";

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      lilac: file(relativePath: { eq: "lilac.jpg" }) { ...fluidImage }
      philosocode: file(relativePath: { eq: "philosocode.jpg" }) { ...fluidImage }
    }
  `);

  const { lilac, philosocode } = data;
  const projectsData = [
    {
      title: "Philosocode",
      imageFluid: philosocode.childImageSharp.fluid,
      description: "Programming blog where I post computer science & web development tutorials.",
      url: "https://philosocode.com"
    },
    {
      title: "Lilac",
      imageFluid: lilac.childImageSharp.fluid,
      description: "Simple landing page and writing app. Built for a 48 hour interview take-home project.",
      url: "https://tamxle.com/lilac"
    }
  ];

  return (
    <section className="o-grid o-section" id="projects">
      <div className="o-grid__item--wide">
        <h2 className="c-heading c-heading--section c-heading--centered" {...aosHeadingAttributes}>Other Projects</h2>

        <div className="c-project__grid">
          {
            projectsData.map(({ description, imageFluid, title, url }, idx) => (
              <ProjectBox
                key={title}
                description={description}
                idx={idx}
                imageFluid={imageFluid}
                title={title}
                url={url}
              />
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default Projects;