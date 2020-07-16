import React from "react";
import Image from "gatsby-image";
import Tilt from 'react-parallax-tilt';
import PropTypes from "prop-types";
import BlockReveal from "../shared/block-reveal.component";

const FeatureProject = ({ description, imageFluid, technologies, title, url, }) => ( 
  <Tilt className="c-feature__project" tiltReverse={true}>
    <BlockReveal direction="right" />
    <a href={url}>

      <div className="c-feature__text">
        <h2 className="c-feature__project-title">{title}</h2>
        <p className="c-body-text c-feature__description">
          {description}
        </p>
        <ul className="c-feature__tech-list">
          {
            technologies.map(tech => (
              <li key={tech} className="c-heading c-heading--condensed c-feature__tech-item">{tech}</li>
            ))
          }
        </ul>
      </div>
      <div className="c-feature__image-container">
        <Image className="c-feature__image" alt={title} fluid={imageFluid} loading="eager" />
      </div>
      <div className="c-feature__window"></div>
    </a>
  </Tilt>
  );

FeatureProject.propTypes = {
  description: PropTypes.string.isRequired,
  imageFluid: PropTypes.object.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default FeatureProject;