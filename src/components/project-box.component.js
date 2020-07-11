import React from "react";
import PropTypes from "prop-types";

const ProjectBox = ({ description, imageSrc, title, url }) => (
  <div className="c-project__container">

    <div className="c-project__text">
      <h3 className="c-project__title">{title}</h3>
      <p className="c-project__description">{description}</p>
      <a className="c-button c-button--dark c-button--go" href={url}>
        Visit Site
        <span className="c-project__arrow">&rarr;</span>
      </a>
    </div>
    <div className="c-project__image-container">
      <img className="c-project__image" src={imageSrc} alt={title} />
    </div>
  </div>
);

ProjectBox.propTypes = {
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default ProjectBox;