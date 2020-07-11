import React from "react";
import Tilt from 'react-parallax-tilt';
import PropTypes from "prop-types";

const FeatureProject = ({ description, imageSrc, technologies, title, url, }) => (
  <Tilt className="c-feature__project" tiltReverse={true}>
    <a href={url}>

      <div className="c-feature__project-text">
        <h4 className="c-feature__project-title">{title}</h4>
        <p className="c-feature__description">
          {description}
        </p>
        <ul className="c-feature__tech-list">
          {
            technologies.map(tech => (
              <li className="c-feature__tech-item">{tech}</li>
            ))
          }
        </ul>
      </div>
        
      <div className="c-feature__image-container">
        <img className="c-feature__image" src={imageSrc} alt={title} />
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