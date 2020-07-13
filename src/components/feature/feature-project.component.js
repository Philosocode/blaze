import React from "react";
import Image from "gatsby-image";
import Tilt from 'react-parallax-tilt';
import PropTypes from "prop-types";

const FeatureProject = ({ description, imageFluid, technologies, title, url, }) => (
  <Tilt className="c-feature__project" tiltReverse={true}>
    <a href={url}>
      <div className="c-feature__project-text">
        <h4 className="c-feature__project-title">{title}</h4>
        <p className="c-body-text c-body-text--small c-feature__description">
          {description}
        </p>
        <ul className="c-feature__tech-list">
          {
            technologies.map(tech => (
              <li className="c-heading c-heading--condensed c-feature__tech-item">{tech}</li>
            ))
          }
        </ul>
      </div>
        
      <div className="c-feature__image-container">
        <Image className="c-feature__image" alt={title} fluid={imageFluid} loading="eager" />
      </div>
    </a>
  </Tilt>
);

FeatureProject.propTypes = {
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default FeatureProject;