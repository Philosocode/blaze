import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import ProjectBox from "./project-box.component";
import SectionHeader from "../shared/section-header.component";


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
    <section className="o-grid o-section o-section--dark" id="projects">
      <div className="o-grid__item--center">
        <SectionHeader color="grey" alignment="left">Projects</SectionHeader>
      </div>
      <div className="o-grid__item--wide">
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