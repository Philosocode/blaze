import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import SectionHeader from "../shared/section-header.component";
import FeatureProject from "./feature-project.component";

const Feature = () => { 
  const data = useStaticQuery(graphql`
    query {
      darronTa: file(relativePath: { eq: "darron-ta.jpg" }) { ...fluidImage }
      kachingu: file(relativePath: { eq: "ka-chingu.jpg" }) { ...fluidImage }
      threeTakesOrLess: file(relativePath: { eq: "3tl.jpg" }) { ...fluidImage }
      politik: file(relativePath: { eq: "politik.jpg" }) { ...fluidImage }
      zephyr: file(relativePath: { eq: "zephyr.jpg" }) { ...fluidImage }
    }
  `);

  const { darronTa, kachingu, threeTakesOrLess, politik, zephyr } = data;
  const projectsData = [
    {
      title: "3 Takes or Less",
      imageFluid: threeTakesOrLess.childImageSharp.fluid,
      description: "Website for up-and-coming stunt team based in Edmonton.",
      url: "https://3takesorless.com",
      technologies: ["React", "Gatsby"]
    },
    {
      title: "KA-Chingu",
      imageFluid: kachingu.childImageSharp.fluid,
      description: "Basic full-stack web app for tracking income and expenses. Built with other team members for chingu.io voyage 8.",
      url: "https://ka-chingu.herokuapp.com",
      technologies: ["React", "Redux", "Express", "PostgreSQL"]
    },
    {
      title: "Darron Ta: Stunt Portfolio",
      imageFluid: darronTa.childImageSharp.fluid,
      description: "Portfolio site for martial artist and stunt actor.",
      url: "https://darronta.com",
      technologies: ["React", "Gatsby"]
    },
    {
      title: "Politik™",
      imageFluid: politik.childImageSharp.fluid,
      description: "Website for Politik™, a social organization.",
      url: "https://politik.ca",
      technologies: ["HTML", "SCSS", "WordPress"]
    },
    {
      title: "Zephyr",
      imageFluid: zephyr.childImageSharp.fluid,
      description: "First iteration of my personal website.",
      url: "https://tamxle.com",
      technologies: ["HTML", "SCSS", "JavaScript"]
    },
  ];

  return (
    <section className="o-grid o-section o-section--dark" id="featured">
      <div className="o-grid__item--wide">
        <SectionHeader color="red">Featured</SectionHeader>
      </div>
      <div className="c-feature__projects">
        {
          projectsData.map(({ description, imageFluid, url, technologies, title }, idx) => (
            <FeatureProject
              key={title}
              idx={idx}
              description={description}
              imageFluid={imageFluid}
              url={url}
              technologies={technologies}
              title={title}
            />
          ))
        }
      </div>
    </section>
  );
 };

export default Feature;